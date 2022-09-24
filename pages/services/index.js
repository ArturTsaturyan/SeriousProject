import styles from "./Services.module.css";
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const Services = () => {
  let {t} = useTranslation()

    return <div className={`${styles.servicesWrap} animate__animated animate__backInLeft animate__slow`}>
        <div className={styles.servicesTexts}>
            <p className={styles.servicesText}>{t("common:servisesText")}</p>
            <p className={styles.servicesText1}>{t("common:servisesText1")}</p>
            <p className={styles.servicesText2}>{t("common:servisesText2")}</p>
        </div>

        <div className={styles.groupimage}>
            <Image src={"/Services/Group.svg"} width={550} height={450} />
        </div>
    </div>
}
export default Services;