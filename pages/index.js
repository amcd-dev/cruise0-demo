import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cruise0 demo</title>
        <meta name="description" content="Demo SPA for Cruise0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <a href="/api/auth/login?returnTo=/dashboard">Login</a>
      </main>
    </>
  )
}
