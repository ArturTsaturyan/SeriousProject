// import { withRouter } from "next/router";


// const IsActiv = ({router,href,children}) => {
//     (function prefetchPages(){
//         if (typeof window !== "undefined"){
//             router.prefetch(router.pathname)
//         }
//     })()

//     const handleClick = event => {
//         event.preventDefault();
//         router.push(href)
//     }

//     const isCurrentPath = router.pathname === href || router.asPath === href;

//     return <div>
//         <a href={href} onClick={handleClick}
//         style={{
//             fontWeight: isCurrentPath ? "bold" : "normal",
//             color: isCurrentPath ? "#0fb7c0" : "blue"
//         }}
//         >
//          { children }
//         </a>
//     </div>
// }

// export default withRouter(IsActiv);
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
// import styles from '../header/Header.module.css'

export { NavLink };

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, exact, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += "activ";
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}