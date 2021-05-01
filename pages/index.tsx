// import Image from 'next/image'
import { Button } from 'react-bootstrap'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <h1>Hola</h1>
      <Button variant="primary">Hola</Button>
      <Button variant="success">Hola</Button>
      <Button variant="danger">Hola</Button>
      <Button variant="whatsapp">Hola</Button>
    </Layout>
  )
}
