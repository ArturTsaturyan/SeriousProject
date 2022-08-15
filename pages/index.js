import Head from 'next/head'
import styles from '../styles/Home.module.css';



export default function Home() {
  return (
    <>
    <Head>
      <title>MainPage</title>
      <meta name='titel' content='MainPage'/>
    </Head>
    <div className={styles.home}>
      <h2 className={styles.homeText}>YOUR BUSINESS NEEDS OUR SOLUTIONS </h2>
      <h5 className={styles.homeText1}>Have an idea?  Serious is the best solution </h5>
      <h6 className={styles.homeText2}>We deliver web and mobile app development services to global businesses since 2017,
        We deliver globally, providing result-driven project management and seamless communication. 
        Our design-focused approach and project execution processes help you to deliver the right solutions.</h6>
    </div>
    </>
  )
}
