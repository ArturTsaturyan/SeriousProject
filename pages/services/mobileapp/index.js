import styles from "./Mobileapp.module.css";
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const Mobileapp = () => {
  let {t} = useTranslation()

    return (
        <div className={`${styles.mobileappWrap} animate__animated animate__backInLeft animate__slow`}>
            <div className={styles.mobileImage}>
                <Image src={"/Services/ServicMobile.svg"} width={530} height={565} />
            </div>
            <div className={styles.mobileTexts}>
                <p className={styles.mobileText}>{t("common:mobileText")}</p>
                <p className={styles.mobileText1}>{t("common:mobileText1")}</p>
                <p className={styles.mobileText2}>{t("common:mobileText2")}</p>
            </div>
        </div>
    )
}
export default Mobileapp;