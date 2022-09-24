import styles from './Sidebar.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';




const Sidebar = () => {
    const router = useRouter()
    const x = router.locale;

    return (
        <div className={styles.sidebar}>

            <div className={styles.sidebarLogo}>
                <Image src="/sidebarLogo.svg" width={32} height={24} />
            </div>
            <div className={styles.sidebarnav}>
                {router.locales.map((loc) => (
                    <li key={loc} className={styles.sidebarLi}>
                        <Link href={router.asPath} locale={loc}>
                            <a className={x == loc ? styles.navitemL : styles.activL}>{loc}</a>
                        </Link>

                    </li>

                ))}
            </div>

        </div>
    )
}
export default Sidebar;