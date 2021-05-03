import tokenService from './tokenService';

const BASE_URL = '/api/posts';

export function create(id) {
  return fetch(`${BASE_URL}/${id}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }

  }).then(res => res.json());
}

export function removeLike(likeId) {
  return fetch(`${BASE_URL}/likes/${likeId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json());
}