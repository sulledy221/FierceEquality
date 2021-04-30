import React, { useState } from 'react';
import PostCard from '../../components/PostCard/PostCard'
import { create } from '../../utils/likesService'
import { useParams } from "react-router-dom";
import FlagLinks from './FlagLinks'


export default function FlagPage() {
    const {flag} = useParams()
    return (
        <div>
            <h1>FLAG PAGE</h1>
            <img src={`/Assets/${flag}.jpeg`} alt="" />
            <FlagLinks flag={flag}/>
            <PostCard post={{ user: {}, likes: [] }} addLike={create} />

        </div>
    );
}