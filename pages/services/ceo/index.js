import styles from "./Ceo.module.css";
import Image from 'next/image';


const Ceo = () => {
    return (
        <div className={`${styles.ceoWrap} animate__animated animate__backInLeft animate__slow`}>
            <div className={styles.ceoTexts}>
                <p className={styles.ceoText}>Ceo & Smm</p>
                <p className={styles.ceoText1}>Ut at porta velit, non facilisis ante. Ut at augue a purus imperdiet tempus sit amet vitae urna. Integer varius eget nisl eget vulputate. Vivamus consequat, purus et lobortis mattis, turpis odio malesuada velit, eget viverra mi nisl vel enim. Quisque ullamcorper tortor lobortis.</p>
            </div>

            <div className={styles.ceoimage}>
                <Image src={"/Services/CeoSmm.svg"} width={603} height={556} />
            </div>
        </div>
    )
}
export default Ceo;