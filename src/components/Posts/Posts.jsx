import React, { useState, useEffect } from 'react'
import AddPostForm from '../../components/AddPostForm/AddPostForm'
import { Button, Card, Form, Icon } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import * as postsApi from '../../utils/posts-api'
import * as likesApi from '../../utils/likesService';



export default function Posts({ posts, setPosts, getPosts }) {

  const { flag } = useParams()

  async function addLike(postId, user){
    try {
      const data = await likesApi.create(postId)
      console.log(data, ' response from addLike')
      getPosts() // get the updated posts
    } catch(err){
      console.log(err)
    }
  }

  async function removeLike(likeId, getPosts){
    try{  
      const data = await likesApi.removeLike(likeId);
      console.log(data, ' response from removeLike')
      getPosts()
    } catch(err){
      console.log(err)
    }
  }


  async function handleSubmit(id) {
    try {

      const data = await postsApi.removePost(flag, id)
      console.log('data -->', data)
      setPosts(data)
    } catch (err) {
      console.log(err)
    }
  }

  const renderPosts = () => {
    return posts.map(post => {
      return <Card key={post._id}>
        <Card.Content extra textAlign={'left'}>
          {post.ownerName}
        </Card.Content>
        <Card.Content>
          <Card.Description>
            {post.text}
          </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign={'left'}>
        <Icon name={'handshake'} size='large'/>
        {post.likes.length} Likes
      </Card.Content>
        <Form onSubmit={() => handleSubmit(post._id)}>
          <Button type='submit'>Delete?</Button>
        </Form>
      </Card>
    })
  }

  return (
    <div>{posts.length > 0 ? renderPosts() : null}</div>
  )
}