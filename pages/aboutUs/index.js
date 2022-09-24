import styles from './aboutUs.module.css';
import useTranslation from 'next-translate/useTranslation';

export default function AboutUs(){
  const { t } = useTranslation();

    return(
        <div className={`${styles.aboutUs} animate__animated animate__backInLeft animate__slow`}>
            <h1 className={styles.aboutUsText}>{t("common:aboutUsText")}</h1>
            <p className={styles.aboutUsText1}>{t("common:aboutUsText1")}</p>
        </div>
    )
}