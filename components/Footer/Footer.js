import styles from "./Footer.module.css";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image'
import "animate.css"
// import { motion } from 'framer-motion';
// import Paper from '@mui/material/Paper';



const Footer = () =>{
  const [footerClick,setFooterClick]=useState(false)



   return(
    <div className={footerClick? `${styles.footerButton}`:`${styles.footerButton} animate__animated animate__shakeY animate__slow`}>

      <div className={`${styles.controlButton}`}>
      
        <button className={footerClick?`${styles.expand} animate__animated animate__shakeY animate__slow`: `${styles.expand}`} onClick={()=>setFooterClick((e)=>!e)}>
    
          {footerClick?<Image className={`${styles.imageTransorm1}`} src="/SocialMediaIcons/Chevron.svg" width={30} height={20}/>:<Image className={`${styles.imageTransorm} `} src="/SocialMediaIcons/Chevron.svg" width={30} height={20}/>}
          <p className={footerClick?`${styles.footerButtonText}`:`${styles.footerButtonText}`} src="/Mont-Black.ttf">Footer</p>

      </button>

      </div>
      <div className={footerClick ? `${styles.footerLinks} animate__animated animate__shakeY animate__slow` :`${styles.footerLinks1}`} >
        {["Clatch","Telegram","Vk","LinkedIn","Fb","Instagram","WatsApp"].map((icn)=>(
           <Link href="#"><a className={styles.socialMediaIcon}><Image src={"/SocialMediaIcons/"+ icn + ".svg"} width={42} height={42}/></a></Link>
        ))}
      
       
     </div>
    </div>
   )
}
export default Footer
