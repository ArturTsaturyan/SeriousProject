import styles from "./Services.module.css";
import Image from 'next/image';

const Services = () => {
    return <div className={`${styles.servicesWrap} animate__animated animate__backInLeft animate__slow`}>
        <div className={styles.servicesTexts}>
            <p className={styles.servicesText}>Web design &</p>
            <p className={styles.servicesText1}>Development  </p>
            <p className={styles.servicesText2}>Ut at porta velit, non facilisis ante. Ut at augue a purus imperdiet tempus sit amet vitae urna. Integer varius eget nisl eget vulputate. Vivamus consequat, purus et lobortis mattis, turpis odio malesuada velit, eget viverra mi nisl vel enim. Quisque ullamcorper tortor lobortis.</p>
        </div>

        <div className={styles.groupimage}>
            <Image src={"/Services/Group.svg"} width={550} height={450} />
        </div>
    </div>
}
export default Services;