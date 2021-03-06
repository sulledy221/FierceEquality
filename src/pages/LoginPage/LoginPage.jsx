import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default function LoginPage(props) {
  const [invalidForm, setValidForm] = useState(false);
  const [error, setError] = useState('')
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const history = useHistory();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }



  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await userService.login(state);
      props.handleSignUpOrLogin()
      history.push('/')

    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/Assets/progress.jpeg' /> Log-in to your account
            </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                type="email"

                name="email"
                placeholder="Email or Username!"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="Password!"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Button
                color='teal'
                fluid size='large'
                type="submit"
                className="btn"
                disabled={invalidForm}
              >
                Login
                </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to='/signup'>Sign Up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </>
  );
}

