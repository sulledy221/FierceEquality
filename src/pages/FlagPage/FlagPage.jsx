import React, { useState } from 'react';
import PostCard from '../../components/PostCard/PostCard'
import {create}from '../../utils/likesService'



export default function FlagPage({flag}) {
    return (
        <div>
            <h1>FLAG PAGE</h1>
            <img src={`/Assets/${flag.name}.jpeg`} alt=""/>
            <PostCard post={{user:{}, likes:[]}} addLike={create} >

            </PostCard>
        </div>
    );
}