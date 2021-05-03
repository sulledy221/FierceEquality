const User = require('../models/user');
const Posts = require('../models/posts');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;



async function profile(req, res) {
  try {


    const user = await User.findOne({ ownerName: req.params.ownerName })

    const posts = await Posts.find({ user: user._id });
    console.log(posts, ' this posts')
    res.status(200).json({ posts: posts, user: user })
  } catch (err) {
    console.log(err)
    res.send({ err })
  }
}

async function signup(req, res) {
  console.log(req.body)


  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    console.log('token?', token)
    res.json({ token });
  } catch (err) {
    console.log("sign up error", err)

    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user, ' this user in login')
    if (!user) return res.status(401).json({ err: 'bad credentials' });

    user.comparePassword(req.body.password, (err, isMatch) => {

      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}


/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user },
    SECRET,
    { expiresIn: '24h' }
  );
}


module.exports = {
  signup,
  login,
  profile
};