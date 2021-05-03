import React, { useState, useEffect } from 'react'
import { Card, Icon, Form, TextArea, Button } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import * as postsApi from '../../utils/posts-api'
import * as likesApi from '../../utils/likesService';

function PostCard({ post, getPosts }) {
  const { flag } = useParams()
  const [text, setText] = useState('');

  async function handleOnSubmit(post) {
    console.log('handle add Post')
    try {

      const data = await postsApi.create({
        text,
        flag
      });
      getPosts(flag)
      console.log(data, ' the response from the create route')



    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="card">
      <Card key={post._id} fluid>
        <Card.Content>
          <Card.Description>
            <Form onSubmit={handleOnSubmit} >
              <TextArea maxLength="500" placeholder='Tell us more!' style={{ minHeight: 100 }} value={text} onChange={e => setText(e.target.value)} />
              <Button type='submit'>Post!</Button>
            </Form>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}

export default PostCard;