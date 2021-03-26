import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Form, Header } from "semantic-ui-react";
import Button from "../components/Button";
// import Form from "../components/Form";
import FormattedMessage from "../components/FormattedMessage";
import FormLabel from "../components/FormLabel";
import { AuthContext } from "../providers/AuthProvider";



const RegisterUX = () => {
  const { register, errors, watch } = useForm();

  const {handleRegister, registerError} = useContext(AuthContext)
  const [email, setEmail] = useState('testguy@test.com')
  const [password, setPassword] = useState('1234567a')
  const [passwordConfirmation, setPasswordConfirmation] = useState('1234567a')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({email, password, passwordConfirmation})
    handleRegister({email, password, passwordConfirmation}, history)
  } 

  // const onSubmit = (data) => {
  //   alert("submitted");
  //   console.log(data);
  // };

  const getPasswordError = () => {
    if (errors.password.type === "required") {
      return "a password is required";
    } else {
      return "Failed";
    }
  };

  console.log(watch("example"));
  console.log(errors);


  return (
    <Form onSubmit={handleSubmit}>
      {/* {registerError && <p>error</p>} */}
      {registerError && 
        <FormattedMessage type='alert'>
          <pre>{JSON.stringify(registerError.errors.full_messages, null, 1)}</pre>
        </FormattedMessage>
      }
      <Header as='h1' textAlign='center'>Register</Header>
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
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        label="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        ref={register({
                required: true,
              })}
        
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
    // <Form onSubmit={handleSubmit(onSubmit)}>
    //   <h1>Register</h1>
    //   <FormLabel>Username</FormLabel>
    //   <input name="username" placeholder="username" ref={register} />
    //   <FormLabel>Password</FormLabel>
    //   <p>minimum of 8 characters -- must include at least one letter and one number</p>
    //   <input
    //     // type='password'
    //     pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    //     name="password"
    //     placeholder='password'
    //     ref={register({
    //       required: true,
    //     })}
    //   />

    //   {/* <input onChange={(e)=> x(e.target.value)}/> */}
    //   {errors.password && (
    //     <FormattedMessage noBackground type='alert'>{getPasswordError()}</FormattedMessage>
    //   )}

    //   <Button primary type="submit">
    //     Submit
    //   </Button>
    // </Form>
  );
}



export default RegisterUX;