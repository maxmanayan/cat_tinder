// This sees if we have User and if token is valid


import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';


const FetchUser = (props) => {
  const {authenticated, setUser} = useContext(AuthContext)
  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    checkUserAuthenticated()
  })

  const checkUserAuthenticated = async () => {
    // do I have USer or is there not a toke in local storage
    if(authenticated || !localStorage.getItem('access-token')) {
      setLoaded(true)
      return
    }

    // we don't have a user instate but we do have a token -- ie after a refresh
    try {
      const res = await axios.get('/api/auth/validate_token')
      // res.data.data will be the users
      // set user in authProvider
      setUser(res.data.data)
    } catch (err) {
      console.log('invalid token')
    } finally {
      setLoaded(true)
    }
  }
  return loaded ? props.children : null
}



export default FetchUser;