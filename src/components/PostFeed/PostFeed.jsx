import React from 'react';
import { Card } from 'semantic-ui-react'
import PostCard from '../PostCard/PostCard';


export default function PostFeed({ posts, isProfile, addLike, removeLike, user }) {

    return (
        <Card.Group>

            {posts.map((post) => {
                return (
                    <PostCard
                        user={user}
                        post={post}
                        key={post._id}
                        isProfile={isProfile}
                        addLike={addLike}
                        removeLike={removeLike}
                    />
                )
            })}
        </Card.Group>

    )
}