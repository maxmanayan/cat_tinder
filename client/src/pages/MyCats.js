import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button, Card, Grid, Image } from "semantic-ui-react"

const MyCats = () => {
  const [cats, setCats] = useState(null)

  useEffect(()=>{
    getCats()
  }, [])

  const getCats = async () => {
    try {
      let res = await axios.get('/api/my_cats')
      setCats(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='myCats'>
      <Link to="/">
        <Button color="blue">
          Home
        </Button>
      </Link>
      <h1>My Cats</h1>
      {/* <pre>{JSON.stringify(cats, null, 2)}</pre> */}
      <Grid>
        {cats && cats.map(cat =>
          <Card key={cat.id} style={{margin: '2em'}}>
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
          </Card>
        )}
      </Grid>
    </div>
  )
}


export default MyCats