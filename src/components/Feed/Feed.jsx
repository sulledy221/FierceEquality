import React, { useState, useEffect } from 'react';
import AddPost from '../../components/AddPostForm/AddPostForm';
import * as postsAPI from '../../utils/post-api';

export default function Feed(){
  const [posts, setPosts] = useState([])


  async function handleAddPost (post){
   
    const data = await postsAPI.create(post);
    console.log(data)
  }

  
    return (
        <>
         <PageHeader />
        <AddPost handleAddPost={handleAddPost}/>
        <PostFeed/>
        </>
    )
}