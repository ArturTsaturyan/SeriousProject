import Footer from "../Footer/Footer"
import Header from "../header/Header"


const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>
                { children }
            <Footer/>
        </div>
    )
}
export default Layout