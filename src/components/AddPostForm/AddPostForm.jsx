import React, { useState } from 'react';

import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddPostForm(props){
 
  const [state, setState] = useState({
    caption: ''
  })


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('caption', state.caption)
    props.handleAddPost(formData); // calling our function!
 }


  return (
    
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="caption"
                  value={state.caption}
                  placeholder="What's would you like to share with everyone today?"
                  onChange={handleChange}
                  required
              />      
              <Button
                type="submit"
                className="btn"
              >
                Post!
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}