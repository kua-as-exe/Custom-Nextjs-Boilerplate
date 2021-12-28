import { Button } from 'react-bootstrap'
import { css, styled } from 'styles/emotion'
import Layout from 'components/layout'

const Title = styled.h1`
  color: red;
`

const Home: React.FC = () => {
  const title = 'aleluya'

  const handleLog = (text: string): void => {
    console.log(text)
  }

  return (
    <Layout>
      <p>{title}</p>
      <Title>{title}</Title>
      <h1>Hola</h1>
      <Button
        variant="primary"
        className={css`
          color: cyan;
        `}
        onClick={() => handleLog('Hola')}
      >
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
