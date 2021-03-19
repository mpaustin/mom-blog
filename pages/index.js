import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Home() {
  return (
    // <Layout>
    //   <h1 className={styles.title}>
    //     Welcome to Attabuoy and Kel!
    //   </h1>
    //   <h3>
    //     <Link href='/all-posts' >All Posts!</Link>
    //   </h3>
    // </Layout>
    <div className={styles.container}>
        {/* <Head>
          <Header/>
        </Head> */}
        <h1 className={styles.title}>
          Welcome to Attabuoy and Kel!
        </h1>
        <h3>
            <Link href='/all-posts' >All Posts!</Link>
        </h3>
    </div>
  )
}
