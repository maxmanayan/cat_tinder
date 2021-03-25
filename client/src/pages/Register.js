import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
  const {handleRegister} = useContext(AuthContext)
  const [email, setEmail] = useState('testguy@test.com')
  const [password, setPassword] = useState('123456')
  const [passwordConfirmation, setPasswordConfirmation] = useState('123456')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({email, password, passwordConfirmation})
    handleRegister({email, password, passwordConfirmation}, history)
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
      <Form.Input 
        required
        label="passwordConfirmation"
        placeholder="passwordConfirmation"
        value={passwordConfirmation}
        onChange={(e)=>setPasswordConfirmation(e.target.value)}
      />
      <Form.Button>Register</Form.Button>
    </Form>
  )
}



export default Register;