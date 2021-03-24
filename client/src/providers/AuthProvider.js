import axios from 'axios'
import React, { createContext } from 'react'

export const AuthContext = React.createContext()
// createContext => return Provider and Consumer

// either use this or useContext hook
export const AuthConsumer = AuthContext.Consumer

class AuthProvider extends React.Component {

  state = { user: null }

  // .then.catch syntax
  handleRegister = (user, history) => {
    axios.post('/api/auth/', user).then(res=>{
      this.setState({user: res.data.data})
      history.push('/')
    }).catch(err=>{
      console.log(err)
    })
  }

  handleLogin = async (user, history) => {
    try {
      let res = await axios.post('/api/auth/sign_in', user)
      this.setState({user: res.data.data})
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out').then(res=>{
      history.push('/login')
    }).catch((err)=>{
      console.log(err.response.data)
    })
  }

  render() {
    return(
    <AuthContext.Provider value={{
      ...this.state, 
      handleRegister: this.handleRegister, 
      handleLogout: this.handleLogout,
      handleLogin: this.handleLogin
      }}>
      {this.props.children}
    </AuthContext.Provider>
    )
  }
}


export default AuthProvider;