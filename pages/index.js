import styles from '../styles/Home.module.css';
import HomePage from '../components/home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  }
}

const Home = () => {
  return (
    <div className={styles.container}>
      <HomePage />
    </div>
  )
}

export default Home
