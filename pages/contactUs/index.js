import styles from "./Contact Us.module.css";
import {FaMapMarkerAlt} from 'react-icons/fa'

const ContactUs = () => {
    return (
        <div className={styles.contactUsWrap}>
            <div className={styles.map}>
                <div className={styles.ellipse}><FaMapMarkerAlt /></div>
            </div>
        </div>
    )
}
export default ContactUs;