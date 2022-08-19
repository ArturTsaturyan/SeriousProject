import styles from "./software.module.css";
import Image from 'next/image';

const SoftWare = () => {
    return (
        <div className={`${styles.softWareWrap} animate__animated animate__backInLeft animate__slow`}>
            <div className={styles.softWareTexts}>
                <p className={styles.softWareText}>Software </p>
                <p className={styles.softWareText1}>Development  </p>
                <p className={styles.softWareText2}>Ut at porta velit, non facilisis ante. Ut at augue a purus imperdiet tempus sit amet vitae urna. Integer varius eget nisl eget vulputate. Vivamus consequat, purus et lobortis mattis, turpis odio malesuada velit, eget viverra mi nisl vel enim. Quisque ullamcorper tortor lobortis.</p>
            </div>

            <div className={styles.softWareimage}>
                <Image src={"/Services/Software.svg"} width={493} height={550} />
            </div>
        </div>
    )
}
export default SoftWare;