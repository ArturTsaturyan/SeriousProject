import Head from 'next/head'
import styles from '../styles/Home.module.css';



export default function Home() {
  return (
    <>
    <Head>
      <title>MainPage</title>
      <meta name='titel' content='MainPage'/>
    </Head>
    <div className={`${styles.home} animate__animated animate__backInLeft animate__slow`}>
      <p className={styles.homeText}>YOUR BUSINESS NEEDS OUR SOLUTIONS </p>
      <p className={styles.homeText1}>Have an idea?  Serious is the best solution </p>
      <p className={styles.homeText2}>We deliver web and mobile app development services to global businesses since 2017,
        We deliver globally, providing result-driven project management and seamless communication. 
        Our design-focused approach and project execution processes help you to deliver the right solutions.</p>
    </div>
    </>
  )
}
