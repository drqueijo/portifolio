import '../styles/globals.css';
import styles from '../styles/Layout.module.css';
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return <div className={styles.global}>
    <Header />
    <Component {...pageProps} />
  </div>
}

export default MyApp
