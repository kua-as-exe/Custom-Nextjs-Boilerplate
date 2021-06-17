// import Image from 'next/image'
import { Button } from 'react-bootstrap'
import Layout from '../components/layout'

const Home: React.FC = () => {
  const title = 'aleluya'

  const handleLog = (text: string): void => {
    console.log(text)
  }

  return (
    <Layout>
      <p>{title}</p>
      <h1>Hola</h1>
      <Button variant="primary" onClick={() => handleLog('Hola')}>
        Hola
      </Button>
      <Button variant="success">Hola</Button>
      <Button variant="danger">Hola</Button>
      <Button variant="whatsapp">Hola</Button>
      <Button className="whatsapp"></Button>
      <Button className="whatsapp">Osiosi</Button>
    </Layout>
  )
}

export default Home
