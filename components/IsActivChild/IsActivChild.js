import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../header/Header.module.css'

export { NavLinkC };

NavLinkC.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLinkC.defaultProps = {
    exact: false
};

function NavLinkC({ href, exact, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className = styles.active;
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}