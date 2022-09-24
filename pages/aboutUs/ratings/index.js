import Image from "next/image";
import styles from "./Ratings.module.css";
import useTranslation from 'next-translate/useTranslation';


export default function Ratings() {
  const { t } = useTranslation();

    return (
        <div className={`${styles.ratingWrap} animate__animated animate__backInLeft animate__slow`}>
            <div className={styles.ratingGroup}>
                <h1 className={styles.ratingTitel}>{t("common:ratingTitel")}</h1>
                <div className={styles.ratingsIcon}>
                    <Image src={'/AboutUs/Ratings/ratings.png'} width={200} height={230} />
                </div>
            </div>
        </div>
    )
}