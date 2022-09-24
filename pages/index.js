import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useTranslation from 'next-translate/useTranslation';



export default function Home() {
  let {t} = useTranslation()
  return (
    <>
    <Head>
      <title>MainPage</title>
      <meta name='titel' content='MainPage'/>
    </Head>
    <div className={`${styles.home} animate__animated animate__backInLeft animate__slow`}>
      <p className={styles.homeText}>{t("common:homeText")}</p>
      <p className={styles.homeText1}>{t("common:homeText1")}</p>
      <p className={styles.homeText2}>{t("common:homeText2")}</p>
    </div>
    </>
  )
}
