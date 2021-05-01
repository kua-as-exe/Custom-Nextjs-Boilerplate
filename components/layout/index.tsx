import Head from 'next/head'
import styled from 'styled-components'

import Header from './header';
import Footer from './footer';

const Layout = styled.div`
  
`

const LayoutComponent = ({children, title = "", description=""}) => {

  return (
    <Layout>
      
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main> {children} </main>
      <Footer/>
      
    </Layout>
  )

}

export default LayoutComponent