import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

export { NavLink };

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, locale, exact, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += "activ";
    }
    return (
        <Link href={href} locale={locale} >
            <a {...props} >
                {children}
            </a>
        </Link>
    );
}