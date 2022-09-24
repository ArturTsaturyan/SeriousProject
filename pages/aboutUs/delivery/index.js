import Image from 'next/image';
import styles from './delivery.module.css';
import useTranslation from 'next-translate/useTranslation';


export default function Delivery() {
  const { t } = useTranslation();

    return (
        <div className={`${styles.deliveryWrap} animate__animated animate__backInLeft animate__slow`}>
            <div>
                <h1 className={styles.deliveryTitel}>{t("common:deliveryTitel")}</h1>
                <div className={styles.deliveryGroup}>
                    <div className={styles.deliveryGroups}>
                        <Image src={'/AboutUs/Delivery/aboutDiscover.svg'} width={250} height={120} />
                        <h4 className={styles.deliveryTitels}>{t("common:deliveryTitels")}</h4>
                        <p className={styles.deliveryText}>{t("common:deliveryText")}</p>
                    </div>
                    <div className={styles.deliveryGroups}>
                        <Image src={'/AboutUs/Delivery/aboutDesign.svg'} width={250} height={120} />
                        <h4 className={styles.deliveryTitels}>{t("common:deliveryTitels1")}</h4>
                        <p className={styles.deliveryText}>{t("common:deliveryText1")}</p>
                    </div>
                    <div className={styles.deliveryGroups}>
                        <Image src={'/AboutUs/Delivery/aboutBuild.svg'} width={250} height={120} />
                        <h4 className={styles.deliveryTitels}>{t("common:deliveryTitels2")}</h4>
                        <p className={styles.deliveryText}>{t("common:deliveryText2")}</p>
                    </div>
                    <div className={styles.deliveryGroups}>
                        <Image src={'/AboutUs/Delivery/aboutDeliver.svg'} width={250} height={120} />
                        <h4 className={styles.deliveryTitels}>{t("common:deliveryTitels3")}</h4>
                        <p className={styles.deliveryText}>{t("common:deliveryText3")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}