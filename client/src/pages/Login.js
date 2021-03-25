import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
  const {handleLogin} = useContext(AuthContext)
  const [email, setEmail] = useState('testguy@test.com')
  const [password, setPassword] = useState('123456')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({email, password})
    handleLogin({email, password}, history)
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input 
        autoFocus
        required
        label="email"
        placeholder="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <Form.Input 
        required
        label="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <Form.Button>Login</Form.Button>
    </Form>
  )
}



export default Login;