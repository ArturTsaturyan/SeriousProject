/* eslint-disable jsx-a11y/alt-text */
import styles from "./Footer.module.css";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import "animate.css";
import Head from 'next/head';




const Footer = () => {
  <Head>
    <title>MainPage</title>
    <meta name='titel' content='MainPage' />
    <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>
    
  </Head>

  const [footerClick, setFooterClick] = useState(false)
  const footerIkons = [
    {
      name: "Clatch",
      id: 1,
      src: "https://clutch.co/profile/serious-web"
    },
    {
      name: "Telegram",
      id: 2,
      src: "https://telegram.me/seriousweb"
    },
    {
      name: "Vk",
      id: 3,
      src: "https://vk.com/public202684138"
    },
    {
      name: "LinkedIn",
      id: 4,
      src: "https://www.linkedin.com/company/78610148/"
    },
    {
      name: "Fb",
      id: 5,
      src: "https://www.facebook.com/Serious.Web.Development"
    },
    {
      name: "Instagram",
      id: 6,
      src: "https://www.instagram.com/serious_web/"
    },
    {
      name: "WatsApp",
      id: 7,
      src: "https://api.whatsapp.com/send/?phone=+37441000025"
    },
  ]


  return (
    <div className={footerClick ? `${styles.footerButton}` : `${styles.footerButton} animate__animated animate__fadeInDown animate__slow`}>

      <div className={`${styles.controlButton}`}>

        <button className={footerClick ? `${styles.expand} animate__animated animate__fadeInUp ` : `${styles.expand}`} onClick={() => setFooterClick((e) => !e)}>

          {footerClick ? <Image className={`${styles.imageTransorm1}`} src="/SocialMediaIcons/Chevron.svg" width={30} height={20} /> : <Image className={`${styles.imageTransorm} `} src="/SocialMediaIcons/Chevron.svg" width={30} height={20} />}
          <p className={styles.footerButtonText}>Footer</p>

        </button>

      </div>
      <div className={footerClick ? `${styles.footerLinks} animate__animated animate__fadeInUp ` : `${styles.footerLinks1}`} >
        {footerIkons.map((icn) => (
          <Link key={icn.id} href={icn.src}><a target="_blank" className={styles.socialMediaIcon}><Image src={"/SocialMediaIcons/" + icn.name + ".svg"} width={42} height={42} /></a></Link>
        ))}

      </div>
    </div>
  )
}
export default Footer
