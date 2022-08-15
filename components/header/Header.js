// import Link from 'next/link'
import Image from 'next/image'
import Sidebar from "../sidebar/sidebar"
import styles from "./header.module.css"
import { NavLink } from '../IsActiv/IsActiv';
// import { NavLinkC } from '../IsActivChild/IsActivChild'



const Header = () => {
    return (
        <header>
            <div className={styles.left}>
                <div className={styles.headerLogoBlock} >
                    <Image className={styles.siriusLogo} src="/Serious Logo 4 1.png" width={280} height={63} />
                </div>
                <nav className={styles.navbar}>
                    <NavLink href="/" exact className={"navitem"}>About Us</NavLink>
                    <NavLink href="/technologies" className={"navitem"}>Technologies</NavLink>
                    <div className={styles.navitemss}><NavLink href="/services" className={"navitem"}>Services</NavLink>
                        <div className={styles.rectagle}>
                            <NavLink href='/services' exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/mobileapp' exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/software' exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/crm' exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/ceo' exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                        </div>
                    </div>
                    <NavLink href="/clients" exact className={"navitem"}>Clients</NavLink>
                    <NavLink href="/courses" exact className={"navitem"}>Courses</NavLink>
                    <NavLink href="/careers" exact className={"navitem"}>Careers</NavLink>
                    <NavLink href="/shop" exact className={"navitem"}>Shop</NavLink>
                    <NavLink href="/contactUs" exact className={"navitem"}>Contact Us</NavLink>
                </nav>
                {/* <nav className={styles.navbar}>
                    <NavLink href="/" exact className={styles.navitem}>About Us</NavLink>
                    <NavLink href="/technologies" className={styles.navitem}>Technologies</NavLink>
                    <div className={styles.navitemss}><NavLink href="/services" className={styles.navitem}>Services</NavLink>
                        <div className={styles.rectagle}>
                            <NavLinkC href='/services' exact className={styles.navite}><div className={styles.rectagles}></div></NavLinkC>
                            <NavLinkC href='/services/mobileapp' exact className={styles.navite}><div className={styles.rectagles}></div></NavLinkC>
                            <NavLinkC href='/services/software' exact className={styles.navite}><div className={styles.rectagles}></div></NavLinkC>
                            <NavLinkC href='/services/crm' exact className={styles.navite}><div className={styles.rectagles}></div></NavLinkC>
                            <NavLinkC href='/services/ceo' exact className={styles.navite}><div className={styles.rectagles}></div></NavLinkC>
                        </div>
                    </div>
                    <NavLink href="/clients" exact className={styles.navitem}>Clients</NavLink>
                    <NavLink href="/courses" exact className={styles.navitem}>Courses</NavLink>
                    <NavLink href="/careers" exact className={styles.navitem}>Careers</NavLink>
                    <NavLink href="/shop" exact className={styles.navitem}>Shop</NavLink>
                    <NavLink href="/contactUs" exact className={styles.navitem}>Contact Us</NavLink>
                </nav> */}
            </div>

            <Sidebar />
        </header>



    )
}
export default Header