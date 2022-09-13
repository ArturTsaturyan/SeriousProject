import styles from "./Crm.module.css";
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'


const Crm = () => {
  let {t} = useTranslation()

    return (
        <div className={`${styles.crmWrap} animate__animated animate__backInLeft animate__slow`}>
        <div className={styles.crmImage}>
            <Image src={"/Services/Automation.svg"} width={546} height={566} />
        </div>
        <div className={styles.crmTexts}>
            <p className={styles.crmText}>{t("common:crmText")}</p>
            <p className={styles.crmText1}>{t("common:crmText1")}</p>
            <p className={styles.crmText2}>{t("common:crmText2")}</p>
        </div>
    </div>
    )
}
export default Crm;