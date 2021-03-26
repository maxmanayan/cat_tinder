import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';
import Loader from '../components/Loader';
import { Button, Card, Header, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


// functional component -- just a JS function
const Home = () => {
  const [cats, setCats] = useState(null)
  const [loading, setLoading] = useState(true)
  const {user} = useContext(AuthContext)

  // const {user} = useContext(AuthContext)

  useEffect(()=>{
    getData()
  },[])


  const getData = async () => {
    try {
      let res = await axios.get('/api/cats')
      setCats(res.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const sample = () => {
    if(cats.length){
      const index = Math.floor(Math.random() * cats.length)
      return cats[index]
    } else {
      return null
    }
  }

  const upVote = async (id) => {
   try {
     console.log(id)
     let res = await axios.put(`/api/cats/${id}`)
     console.log(res)
     removeCat(id)
   } catch (err) {
     console.log(err)
   }
  }

  const removeCat = (id) => {
    const newCats =  cats.filter( cat => cat.id !== id)
    setCats(newCats)
  }

  if(loading) return <Loader type='ring' text='loading' />
  // if(cats.length === 0) 
  const cat = sample()

  return(
    <div className='myCats' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Welcome Home {user.email}</h1>
      {/* <pre>{JSON.stringify(cats, null, 2)}</pre> */}
      <br />
      <Header as='h1'>Cat Tinder</Header>
      <br />
      <Card key={cat.id}>
        <Image src={cat.avatar} />
        <Card.Content>
          <Card.Header>
            { cat.name }
          </Card.Header>
          <Card.Description>
            { cat.breed }
          </Card.Description>
          <Card.Meta>
            { cat.registry }
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button color="red" icon basic onClick={()=>removeCat(cat.id)}>
            <Icon name="thumbs down" />
          </Button>
          <Button color="green" icon basic onClick={()=>upVote(cat.id)}>
            <Icon name="thumbs up" />
          </Button>
        </Card.Content>
      </Card>
      <Link to="/my_cats">
        <Button color="blue">
          My Cats
        </Button>
      </Link>
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