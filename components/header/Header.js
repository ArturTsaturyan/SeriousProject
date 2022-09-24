import Image from 'next/image'
import Sidebar from "../sidebar/sidebar"
import styles from "./header.module.css"
import { NavLink } from '../IsActiv/IsActiv';
import { useScroll } from './useScroll';
import useTranslation from 'next-translate/useTranslation'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Header = () => {
    const [activ, setActiv] = useState(false);
    const [activArow, setActivArow] = useState(true);
    const [activArow1, setActivArow1] = useState(true);


    const router = useRouter();
    const x = router.locale;


    useScroll()


    useEffect(() => {
        const getStorage = localStorage.getItem("test")

        setActiv(JSON.parse(getStorage))
    }, [])

    useEffect(() => {
        const setStorage = JSON.stringify(activ);
        localStorage.setItem("test", setStorage);
    }, [activ])

    const menuItem1 = [
        {
            id: 3,
            href: "/clients",
            nameitem: "clients"
        },
        // {
        //     id: 4,
        //     href: "/courses",
        //     nameitem: "courses"
        // },
        {
            id: 5,
            href: "/careers",
            nameitem: "careers"
        },
        // {
        //     id: 6,
        //     href: "/shop",
        //     nameitem: "shop"
        // },
        {
            id: 7,
            href: "/contactUs",
            nameitem: "contact"
        }
    ]
    const click = () => {

        setActiv((e) => !e)
    }
    let { t } = useTranslation()

    const pathHome = () => {
        router.push("/")
    }
    const activArowFunction =()=> {
        setActivArow((e)=>!e)
    }
    const activArowFunction1 =()=> {
        setActivArow1((e)=>!e)
    }
    return (
        <header>
            <div className={styles.left}>
                <div className={styles.headerLogoBlock} onClick={pathHome}>
                    <Image className={styles.siriusLogo} src="/Serious Logo 4 1.png" width={280} height={63} />
                </div>
                <div className={styles.sidebarLogo}>
                    <div className={styles.logoSidebar} onClick={click}>
                        <div className={activ ? styles.activHamburger : styles.hamburger}></div>
                    </div>
                </div>
                <nav id="container" className={activ ? styles.navbarActiv : styles.navbar}>

                    <NavLink onClick={click} href='/' exact className={"navitem"}>{t("common:home")}</NavLink>
                    <div className={styles.navitemss}>

                        <NavLink href='/aboutUs' className={`${styles.navitem} navitem`}><span onClick={click}>{t("common:aboutUs")}</span>
                            {activArow ? <div className={styles.lineDown} onClick={activArowFunction}><Image src='/lineDown.svg' width={20} height={15} /></div> : <div className={styles.lineUp} onClick={activArowFunction}><Image src='/lineUp.svg' width={20} height={15} /></div>}
                        </NavLink>
                        <div className={activArow?styles.rectagleRezrev:styles.rectagleRezrevActiv}>
                                <div className={`${styles.rectagleRezrevPage} animate__animated animate__bounceInRight animate__slow`}>
                                    <NavLink href='/aboutUs/delivery' onClick={click} exact className={"navitemsReszerv"}>delivery</NavLink>
                                    <NavLink href='/aboutUs/ratings' onClick={click} exact className={"navitemsReszerv"}>ratings</NavLink>
                                </div>
                        </div>
                        <div className={styles.rectagle}>
                            <NavLink href='/aboutUs' onClick={click} exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/aboutUs/delivery' onClick={click} exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/aboutUs/ratings' onClick={click} exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                        </div>
                    </div>
                    <NavLink onClick={click} href="/technologies" exact className={"navitem"}>{t("common:technologies")}</NavLink>

                    <div className={styles.navitemss}>
                        <NavLink href="/services" className={`${styles.navitem} navitem`}><span onClick={click}>{t("common:servises")}</span>
                            {activArow1 ? <div className={styles.lineDown} onClick={activArowFunction1}><Image src='/lineDown.svg' width={20} height={15} /></div> : <div onClick={activArowFunction1} className={styles.lineUp}><Image src='/lineUp.svg' width={20} height={15} /></div>}
                        </NavLink>
                        <div className={activArow1?styles.rectagleRezrev1:styles.rectagleRezrev1Activ}>
                            
                                <div className={`${styles.rectagleRezrevPage} animate__animated animate__backInRight animate__slow`}>
                                    <NavLink href='/services/mobileapp' onClick={click} exact className={"navitemsReszerv"}>mobileapp</NavLink>
                                    <NavLink href='/services/software' onClick={click} exact className={"navitemsReszerv"}>software</NavLink>
                                    <NavLink href='/services/crm' onClick={click} exact className={"navitemsReszerv"}>crm</NavLink>
                                    <NavLink href='/services/ceo' onClick={click} exact className={"navitemsReszerv"}>ceo</NavLink>
                                </div>
                        
                        </div>
                        <div className={styles.rectagle}>
                            <NavLink href='/services' onClick={click} exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/mobileapp' onClick={click} exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/software' onClick={click} exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/crm' onClick={click} exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/ceo' onClick={click} exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                        </div>
                    </div>
                    {menuItem1
                        .map((el) => ({ ...el, nameitem: el.nameitem }))
                        .map(man => (
                            <NavLink onClick={click} key={man.id} href={man.href} exact className={"navitem"}> {t(`common:${man.nameitem}`)}</NavLink>
                        ))}
                    <div className={styles.sidebarRezerv}>
                        {router.locales.map((loc) => (
                            <li key={loc} className={styles.sidebarLi}>
                                <Link href={router.asPath} locale={loc}>
                                    <a className={x == loc ? styles.navitemL : styles.activL}>{loc}</a>
                                </Link>

                            </li>
                        ))}
                    </div>
                </nav>

            </div>

            <Sidebar />
        </header>



    )
}
export default Header