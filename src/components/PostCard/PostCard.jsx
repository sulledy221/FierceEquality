import React from 'react';
import { Card, Icon, Image, Feed, Form, TextArea, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function PostCard({post, isProfile, addLike, removeLike, user }) { 

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
  const onSubmit = () => {};
  const Button = () => <Button>Post!</Button>


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
        <Form onSubmit={onSubmit}>
    <TextArea maxLength="500" placeholder='Tell us more!' style={{ minHeight: 100 }} />
    <Button type='submit'>Post!</Button>
        </Form>
      </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={'right'}>
        <Icon name={'heart'} size='large' onClick={clickHandler} color={likeColor} />
        {post.likes.length} Likes
          
      </Card.Content>
    </Card>
  );
}

export default PostCard;