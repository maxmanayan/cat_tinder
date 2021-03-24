import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';
import Loader from '../components/Loader';


// functional component -- just a JS function
const Home = () => {
  const [testData, setTestData] = useState(null)
  const [loading, setLoading] = useState(true)
  const {user} = useContext(AuthContext)

  // const {user} = useContext(AuthContext)

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try {
      let res = await axios.get('/api/api_test')
      setTestData(res.data.data_here)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  if(loading) return <Loader type='ring' text='loading' />
  if(!user) return <p>Need to Login/Register</p>
  return(
    <div>
      <h1>Welcome Home {user.email}</h1>
      {testData && testData}
    </div>
  )
}

// class component
// class Home extends React.Component {
//   render(){
//     return(
//       <div>
//         <h1>Home</h1>
//       </div>
//     )
//   }
// }

export default Home;