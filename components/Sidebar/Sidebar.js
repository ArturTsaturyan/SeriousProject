// import Link from 'next/link';
import styles from './Sidebar.module.css';
import Image from 'next/image';
// import { useState } from 'react';
import { NavLinkL } from '../IsActivLanguage/IsActivLanguage';
const Sidebar = () => {
    // const [navi,setNavi] = useState(false)

    return (
        <div className={styles.sidebar}>

            <div className={styles.sidebarLogo}>
                <Image src="/sidebarLogo.svg" width={32} height={24} />
            </div>
            <div className={styles.sidebarnav}>
                {/* <div className={navi?styles.navitemL:styles.activL} onClick={()=>setNavi((e)=>!e)}>ENG</div>
                <div className={navi?styles.navitemL:styles.activL}>RUS</div>
                <div className={navi?styles.navitemL:styles.activL}>ARM</div> */}

                <NavLinkL href="/language/ENG" exact className={styles.navitemL}>ENG</NavLinkL>
                <NavLinkL href="/language/RUS" exact className={styles.navitemL}>RUS</NavLinkL>
                <NavLinkL href="/language/ARM" exact className={styles.navitemL}>ARM</NavLinkL>
                {/* <Link href="#"><a>ENG</a></Link>
                <Link href=""><a>RUS</a></Link>
                <Link href=""><a>ARM</a></Link> */}
            </div>


        </div>
    )
}
export default Sidebar;