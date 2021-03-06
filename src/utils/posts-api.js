import tokenService from './tokenService';

const BASE_URL = '/api/posts/';

export function create(post) {
  console.log(post, 'in create')
  return fetch(BASE_URL + post.flag, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json())
}

export function removePost(flag, postID) {
  return fetch(`${BASE_URL}${flag}/${postID}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json())
}

export function getAll(flag) {
  return fetch(BASE_URL + flag, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
    .then(res => res.json());
}