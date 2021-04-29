import React, { useState } from 'react';
import PostCard from '../../components/PostCard/PostCard'

export default function FlagPage(props) {
    return (
        <div>
            <h1>FLAG PAGE</h1>
            <img src="/Assets/Asexual.jpeg" alt=""/>
            <PostCard post={{user:{}, likes:[]}}>

            </PostCard>
        </div>
    );
}