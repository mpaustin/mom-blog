import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <Header/>
        </Head>
        <h1 className={styles.title}>
          Welcome to Attabuoy and Kel!
        </h1>
        <h3>
            <Link href='/all-posts' >All Posts!</Link>
        </h3>

      <footer className={styles.footer}>
          Powered by MPA
      </footer>
    </div>
  )
}
