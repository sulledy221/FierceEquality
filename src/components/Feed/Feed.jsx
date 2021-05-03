import React, { useState, useEffect } from 'react';
import AddPost from '../../components/AddPostForm/AddPostForm';
import PageHeader from '../Header/Header';
import PostFeed from '../PostFeed/PostFeed';
import * as postsAPI from '../../utils/posts-api.js';

export default function Feed() {
  const [posts, setPosts] = useState([])


  async function handleAddPost(post) {

    const data = await postsAPI.create(post);
    console.log(data)
  }


  return (
    <>
      <PageHeader user={{}} />
      <AddPost handleAddPost={handleAddPost} />
      <PostFeed posts={[]} />
    </>
  )
}