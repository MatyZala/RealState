import styles from '../styles/Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  }
}

export default function Home(props) {
const { t } = useTranslation();

  return (
    <div className={styles.container}>
      Real Estate
      <h2>{t("home:rent")}</h2>
    </div>
  )
}
