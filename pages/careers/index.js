import styles from "./Careers.module.css";
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from "next/image";


const Careers = () => {
    const { t } = useTranslation();

    return <div className={`${styles.careersWrap} animate__animated animate__backInLeft animate__slow`} >
        <div className={styles.careersTitel1}>
            <h1 className={styles.titel1}>{t("common:careersTitel1")}</h1>
            <p className={styles.titel1Text}><b className={styles.titelTextBold}>{t("common:careersTitel1TextBold")}</b>{t("common:careersTitel1Text")}</p>
        </div>
        <div className={styles.careersTitel}>
            <h1 className={styles.titel}>{t("common:careersTitel")}</h1>
            <Link href="#" >
                <a className={styles.careersLink}>
                    <div className={styles.careersLinks}>
                        <h4 className={styles.careesrLinkTitel}>Associate Scientific Director</h4>
                        <p className={styles.careersLinkTitel1}>Full Time<span className={styles.careersLinkTitel2}>New York, NY, US <Image src='/Careers/rightArrow.svg' width={60} height={50}/></span></p>
                    </div>
                </a>
            </Link>
            <Link href="#">
                <a className={styles.careersLink}>
                    <div className={styles.careersLinks}>
                        <h4 className={styles.careesrLinkTitel}>Associate Scientific Director</h4>
                        <p className={styles.careersLinkTitel1}>Full Time<span className={styles.careersLinkTitel2}>New York, NY, US <Image src='/Careers/rightArrow.svg' width={60} height={50}/></span></p>
                    </div>
                </a>
            </Link>
            <Link href="#">
                <a className={styles.careersLink}>
                    <div className={styles.careersLinks}>
                        <h4 className={styles.careesrLinkTitel}>Associate Scientific Director</h4>
                        <p className={styles.careersLinkTitel1}>Full Time<span className={styles.careersLinkTitel2}>New York, NY, US <Image src='/Careers/rightArrow.svg' width={60} height={50}/></span></p>
                    </div>
                </a>
            </Link>
        </div>

    </div>
}
export default Careers;
