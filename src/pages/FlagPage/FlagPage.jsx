import React, { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard/PostCard'
import { create } from '../../utils/likesService'
import { useParams } from "react-router-dom";
import FlagLinks from './FlagLinks'
import { getAll } from '../../utils/posts-api'
import Posts from '../../components/Posts/Posts'


export default function FlagPage({ user }) {
    const [posts, setPosts] = useState([]);
    const [flagData, setFlagData] = useState({});
    const { flag } = useParams()
    async function getPosts(flagName) {

        try {
            const data = await getAll(flagName);
            setPosts([...data.posts])
            setFlagData({ ...data.flagData })

        } catch (err) {
            console.log(err, ' this is the error')
        }
    }

    useEffect(() => {
        getPosts(flag)
    }, [flag])
    console.log('posts', posts)
    return (
        <div>
            <p>{flagData.description}</p>
            <img className="fpages" src={`/Assets/${flag}.jpeg`} />
            <h1 className="page">Here are some resources!</h1>
            <FlagLinks flag={flag} />
            <Posts posts={posts} setPosts={setPosts} user={user} getPosts={getPosts} />
            <PostCard post={{ user: {}, likes: [] }} addLike={create} getPosts={getPosts} />

        </div>
    );


}