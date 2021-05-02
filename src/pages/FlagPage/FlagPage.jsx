import React, { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard/PostCard'
import { create } from '../../utils/likesService'
import { useParams } from "react-router-dom";
import FlagLinks from './FlagLinks'
import { getAll } from '../../utils/posts-api'
import Posts from '../../components/Posts/Posts'


export default function FlagPage() {
    const [posts, setPosts] = useState([]);
    const { flag } = useParams()
    async function getPosts(flagName) {

        try {
            const data = await getAll(flagName);
            setPosts([...data.posts])

        } catch (err) {
            console.log(err, ' this is the error')
        }
    }

    useEffect(() => {
        getPosts(flag)
    }, [])
    console.log('posts', posts)
    return (
        <div>
            <h1>FLAG PAGE</h1>
            <img src={`/Assets/${flag}.jpeg`} alt="" />
            <FlagLinks flag={flag} />
            <Posts posts={posts} setPosts={setPosts}/>
            <PostCard post={{ user: {}, likes: [] }} addLike={create} />

        </div>
    );


}