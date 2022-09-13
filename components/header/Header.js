import Image from 'next/image'
import Sidebar from "../sidebar/sidebar"
import styles from "./header.module.css"
import { NavLink } from '../IsActiv/IsActiv';
import { useScroll } from './useScroll';
import { useTranslation } from 'react-i18next';

const Header = () => {

    useScroll()
    const menuItem = [
        {
            id: 1,
            href: "/",
            nameitem: "home"
        },
        {
            id: 2,
            href: "/technologies",
            nameitem: "technologies"
        }
    ]

    const menuItem1 = [
        {
            id: 3,
            href: "/clients",
            nameitem: "clients"
        },
        {
            id: 4,
            href: "/courses",
            nameitem: "courses"
        },
        {
            id: 5,
            href: "/careers",
            nameitem: "careers"
        },
        {
            id: 6,
            href: "/shop",
            nameitem: "shop"
        },
        {
            id: 7,
            href: "/contactUs",
            nameitem: "contact"
        }
    ]
    let {t} = useTranslation()
    return (
        <header>
            <div className={styles.left}>
                <div className={styles.headerLogoBlock} >
                    <Image className={styles.siriusLogo} src="/Serious Logo 4 1.png" width={280} height={63} />
                </div>
                <nav id="container" className={styles.navbar}>
                    {menuItem
                    .map((el) => ({ ...el, nameitem: t(el.nameitem) }))
                    .map((man) => {
                            return(
                                <NavLink key={man.id} href={man.href} exact className={"navitem"}>{man.nameitem}</NavLink>
                            )
                        })}

                    <div className={styles.navitemss}><NavLink href="/services" className={"navitem"}>{t("servises")}</NavLink>
                        <div className={styles.rectagle}>
                            <NavLink href='/services' exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/mobileapp' exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/software' exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/crm' exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                            <NavLink href='/services/ceo' exact className={"navitems"}><div className={styles.rectagles}></div></NavLink>
                        </div>
                    </div>
                    {menuItem1
                    .map((el) => ({ ...el, nameitem: t(el.nameitem) }))
                    .map(man => (
                        <NavLink key={man.id} href={man.href} exact className={"navitem"}> {man.nameitem}</NavLink>
                    ))}
                </nav>
            </div>

            <Sidebar/>
        </header>



    )
}
export default Header