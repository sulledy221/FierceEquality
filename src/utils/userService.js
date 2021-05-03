import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {

fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })
  
  .then(res => {
    if (res.ok) {

  return res.json().then(({token}) => {
        console.log('what is token? ', token)
        tokenService.setToken(token)
      })

      .then((token) => token)
    }

    throw new Error('Email already taken!');
  })
};


function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {

    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function getProfile(username){
  return fetch(BASE_URL + username, {
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => {
    if(res.ok) return res.json();
    throw new Error('Bad Credentials!')
  })
}

export default {
  signup, 
  logout,
  login,
  getUser,
  getProfile
};

