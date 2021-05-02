import React, { useState, useEffect } from 'react'
import { Card, Icon, Form, TextArea, Button } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import * as postsApi from '../../utils/posts-api'
import * as likesApi from '../../utils/likesService';

function PostCard({post, isProfile, addLike, removeLike, user }) { 
  const {flag} = useParams()
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');
  // as the logged in the user when I add a like I want the heart to turn red
  // find out if the logged in user has liked the card

  const likedIndexNumber = post&&post.likes.findIndex(like => like.username === user.username);
  // if one of the likes in post.likes is has the same username as are logged in user
  // it will return the index of that particular object in the post.likes array
  // if not it will return -1

  const clickHandler = likedIndexNumber > - 1 ? () => removeLike(post.likes[likedIndexNumber]._id) : () => addLike(post._id);
  const likeColor = likedIndexNumber > -1 ? 'red' : 'grey';
  // as the logged in the user when I click on the heart and it is red I want 
  // to remove the like and turn heart grey

  async function handleOnSubmit(post){
    console.log('handle add Post')
    try {
        
        const data = await postsApi.create({
            ownerId: "608b54365b49575fa180efa1",
            ownerName: 'Sully',
            text,
            flag
        });

        console.log(data, ' the response from the create route')

        setPosts(posts => [data.post, ...posts])

    } catch(err){
        console.log(err)
    }
}

async function getPosts(){

    try {
      const data = await postsApi.getAll();
      setPosts([...data.posts])
    } catch(err){
      console.log(err, ' this is the error')
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Card key={post._id}>
     {isProfile ? ''
        :  
          <Card.Content textAlign='left'>
              <Card.Header floated="right">{post.user.username}</Card.Header>
          </Card.Content>
      
      }
      <Card.Content>
      <Card.Description>
        {post.caption}
        <Form onSubmit={handleOnSubmit}>
    <TextArea maxLength="500" placeholder='Tell us more!' style={{ minHeight: 100 }} value={text} onChange={e => setText(e.target.value)} />
    <Button type='submit'>Post!</Button>
        </Form>
      </Card.Description>
      </Card.Content>
      
    </Card>
  );
}

export default PostCard;