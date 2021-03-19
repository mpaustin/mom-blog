import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout pageTitle='Attabuoy and Kel' description='Moms Blog'>
      <Component {...pageProps} />
    </Layout>
  ); 
}

export default MyApp
