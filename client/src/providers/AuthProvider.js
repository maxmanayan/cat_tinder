import React, { createContext } from 'react'

export const AuthContext = React.createContext()
// createContext => return Provider and Consumer

// either use this or useContext hook
export const AuthConsumer = AuthContext.Consumer

class AuthProvider extends React.Component {

  state = { user:{name:'Tony', age: 21}, x: 'ayy'}
  render() {
    return(
    <AuthContext.Provider value={{...this.state, someFunc: () => alert('yo')} }>
      {this.props.children}
    </AuthContext.Provider>
    )
  }
}


export default AuthProvider;