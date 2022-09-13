import styles from "./software.module.css";
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'

const SoftWare = () => {
  let {t} = useTranslation()

    return (
        <div className={`${styles.softWareWrap} animate__animated animate__backInLeft animate__slow`}>
            <div className={styles.softWareTexts}>
                <p className={styles.softWareText}>{t("common:softWareText")}</p>
                <p className={styles.softWareText1}>{t("common:softWareText1")}</p>
                <p className={styles.softWareText2}>{t("common:softWareText2")}</p>
            </div>

            <div className={styles.softWareimage}>
                <Image src={"/Services/Software.svg"} width={493} height={550} />
            </div>
        </div>
    )
}
export default SoftWare;