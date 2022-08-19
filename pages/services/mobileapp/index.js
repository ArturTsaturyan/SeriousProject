import styles from "./Mobileapp.module.css";
import Image from 'next/image';


const Mobileapp = () => {
    return (
        <div className={`${styles.mobileappWrap} animate__animated animate__backInLeft animate__slow`}>
            <div className={styles.mobileImage}>
                <Image src={"/Services/ServicMobile.svg"} width={530} height={565} />
            </div>
            <div className={styles.mobileTexts}>
                <p className={styles.mobileText}>Mobile App </p>
                <p className={styles.mobileText1}>Development  </p>
                <p className={styles.mobileText2}>Ut at porta velit, non facilisis ante. Ut at augue a purus imperdiet tempus sit amet vitae urna. Integer varius eget nisl eget vulputate. Vivamus consequat, purus et lobortis mattis, turpis odio malesuada velit, eget viverra mi nisl vel enim. Quisque ullamcorper tortor lobortis.</p>
            </div>
        </div>
    )
}
export default Mobileapp;