import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
// import styles from '../header/Header.module.css'
import styles from '../Sidebar/Sidebar.module.css'

export { NavLinkL };

NavLinkL.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLinkL.defaultProps = {
    exact: false
};

function NavLinkL({ href, exact, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (!isActive) {
        props.className = styles.activL;
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}