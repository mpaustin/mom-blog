import Head from "next/head";
import Header from "./Header";
import styles from '../styles/Home.module.css'

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <Header />
        <div>{children}</div>
      </main>
      <footer className={styles.footer}>
          Powered by MPA
      </footer>
    </>
  );
}
