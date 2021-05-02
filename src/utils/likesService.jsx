import tokenService from './tokenService';

const BASE_URL = '/api/posts';

export function create(id) {
    return fetch(`${BASE_URL}/${id}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    
    }).then(res => res.json());
  }

export function removeLike(id){
    return fetch(`${BASE_URL}/likes/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
    }).then(res => res.json());
}