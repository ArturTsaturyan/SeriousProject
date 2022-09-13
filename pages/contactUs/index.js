import styles from "./Contact Us.module.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import { Formik, Field, Form } from "formik";
import useTranslation from 'next-translate/useTranslation'


const ContactUs = () => {
  let {t} = useTranslation()

    return (
        <div className={styles.contactUsWrap}>
            <div className={styles.map}>
                <div className={styles.ellipse}><FaMapMarkerAlt /></div>
            </div>
            <div className={styles.containerEmP}>
                <p className={styles.textContact}>{t("common:textContact")}</p>
                <div className={styles.phonEm}>
                    <Image className={styles.phon} src={"/ContactUs/ContactPhone.svg"} width={32} height={32} />
                    <span className={styles.phonNum}>+374(41) 00-00-25</span>
                    <Image className={styles.email} src={"/ContactUs/ContactEmail.svg"} width={32} height={34} />
                    <span className={styles.phonEmail}>info@serious.am</span>
                </div>
             
                <Formik initialValues={{ name: "", email: "", message: "", phone: "" }}  onSubmit={(data) => console.log(data)}>
                    <Form>
                        <Field name="name" placeholder={t("common:name")} className={styles.formInput} />
                        <Field name="email" type="email" placeholder={t("common:email")} className={styles.formInput} />
                        <Field name="message" placeholder={t("common:message")} className={styles.formInput} />
                        <Field name="phone" placeholder={t("common:phone")} className={styles.formInput}/>
                        <button className={styles.formButton}>{t("common:send")}</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default ContactUs;