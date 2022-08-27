import Head from 'next/head'
import Image from 'next/image'
import slamdancing from '../public/images/slamdancing.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scenario74</title>
        <meta name="description" content="Hello, goodbye" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src={slamdancing}
          alt="slamdancing"
        />
      </main>
    </div>
  )
}
