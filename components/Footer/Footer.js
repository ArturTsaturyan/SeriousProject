import styles from "./Footer.module.css";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image'
import "animate.css"
// import { motion } from 'framer-motion';
// import Paper from '@mui/material/Paper';



const Footer = () =>{
  const [footerClick,setFooterClick]=useState(false)
  const footerIkons = [
    {
      name:"Clatch",
      id:1
    },
    {
      name:"Telegram",
      id:2
    },
    {
      name:"Vk",
      id:3
    },
    {
      name:"LinkedIn",
      id:4
    },
    {
      name: "Fb",
      id:5
    },
    {
      name:"Instagram",
      id:6
    },
    {
      name:"WatsApp",
      id:7
    },
  ]


   return(
    <div className={footerClick? `${styles.footerButton}`:`${styles.footerButton} animate__animated animate__shakeY animate__slow`}>

      <div className={`${styles.controlButton}`}>
      
        <button className={footerClick?`${styles.expand} animate__animated animate__shakeY animate__slow`: `${styles.expand}`} onClick={()=>setFooterClick((e)=>!e)}>
    
          {footerClick?<Image className={`${styles.imageTransorm1}`} src="/SocialMediaIcons/Chevron.svg" width={30} height={20}/>:<Image className={`${styles.imageTransorm} `} src="/SocialMediaIcons/Chevron.svg" width={30} height={20}/>}
          <p className={footerClick?`${styles.footerButtonText}`:`${styles.footerButtonText}`} src="/Mont-Black.ttf">Footer</p>

      </button>

      </div>
      <div className={footerClick ? `${styles.footerLinks} animate__animated animate__shakeY animate__slow` :`${styles.footerLinks1}`} >
        {footerIkons.map((icn)=>(
           <Link key={icn.id}  href="#"><a className={styles.socialMediaIcon}><Image src={"/SocialMediaIcons/"+ icn.name + ".svg"} width={42} height={42}/></a></Link>
        ))}
      
     </div>
    </div>
   )
}
export default Footer
