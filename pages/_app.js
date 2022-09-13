import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { appWithTranslation} from "next-i18next";
import '../components/language/i18n';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(MyApp);
