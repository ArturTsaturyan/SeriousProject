import styles from "./Crm.module.css";
import Image from 'next/image';


const Crm = () => {
    return (
        <div className={`${styles.crmWrap} animate__animated animate__backInLeft animate__slow`}>
        <div className={styles.crmImage}>
            <Image src={"/Services/Automation.svg"} width={546} height={566} />
        </div>
        <div className={styles.crmTexts}>
            <p className={styles.crmText}>Business <br/>Automation &</p>
            <p className={styles.crmText1}>CRM Development </p>
            <p className={styles.crmText2}>Ut at porta velit, non facilisis ante. Ut at augue a purus imperdiet tempus sit amet vitae urna. Integer varius eget nisl eget vulputate. Vivamus consequat, purus et lobortis mattis, turpis odio malesuada velit, eget viverra mi nisl vel enim. Quisque ullamcorper tortor lobortis.</p>
        </div>
    </div>
    )
}
export default Crm;