import tokenService from './tokenService';

// This matches up with the app.use('/api/posts') in the server.js
// Where all our post api routes will live
const BASE_URL = '/api/posts/';

export function create(post){
  console.log(post, 'in create')
  return fetch(BASE_URL+post.flag, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

export function getAll(flag) {
  return fetch(BASE_URL+flag, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json());
}