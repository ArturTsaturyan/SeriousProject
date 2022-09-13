import styles from "./Ceo.module.css";
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'


const Ceo = () => {
  let {t} = useTranslation()

    return (
        <div className={`${styles.ceoWrap} animate__animated animate__backInLeft animate__slow`}>
            <div className={styles.ceoTexts}>
                <p className={styles.ceoText}>{t("common:ceoText")}</p>
                <p className={styles.ceoText1}>{t("common:ceoText1")}</p>
            </div>

            <div className={styles.ceoimage}>
                <Image src={"/Services/CeoSmm.svg"} width={603} height={556} />
            </div>
        </div>
    )
}
export default Ceo;