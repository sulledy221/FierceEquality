import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';


export default function SignUpPage(props){
  const [invalidForm, setValidForm] = useState(false)
  const [error, setError ] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState]  = useState({
    username: 'sully',
    email: 'sully@gmail.com',
    password: 'sully',
    passwordConf: 'sully',
    identity: 'trans',
    pronouns: 'he him',
    bio: 'dgninvisodimvpmd',
  });

  const history = useHistory()

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault();


    const formData = new FormData();
    formData.append('photo', selectedFile);


    for (let key in state){
      formData.append(key, state[key])
    }
    try {
      const success = await userService.signup(state);
      if (success){
        history.push("/")
      }
    } catch(err){
      console.log(err.message)
      setError(err.message)
    }

  }

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }
 
    return (
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='/Assets/progress.jpeg' /> Sign Up    
              </Header>            
                <Form autoComplete="off"  onSubmit={handleSubmit}>
                <Segment stacked>               
                    <Form.Input                    
                      name="username"
                      placeholder="Username"
                      value={state.username}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input
                      type="email"                  
                      name="email"
                      placeholder="Email"
                      value={ state.email}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input             
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={ state.password}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input     
                      name="passwordConf"
                      type="password"
                      placeholder="Confirm Password"
                      value={ state.passwordConf}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input     
                      name="identity"
                      type="text"
                      placeholder="What do you identify as?"
                      value={ state.identity}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input     
                      name="pronouns"
                      type="text"
                      placeholder="What are your preferred pronouns?"
                      value={ state.pronouns}
                      onChange={handleChange}
                      required
                    />
                    <Form.TextArea label='Bio' placeholder='Tell us more about yourself and what brought you here!' name="bio" value={state.bio} onChange={handleChange} maxLen={"10"}/>
                    <Button
                      type="submit"
                      className="btn"
                      disabled={invalidForm}
                    >
                    Signup
                  </Button>
                  </Segment>
                  {error ? <ErrorMessage error={error} /> : null}
                </Form>
               
            </Grid.Column>
          </Grid>
        </>
      );   
    
}
