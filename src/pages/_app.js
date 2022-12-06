import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return <SessionProvider>
    <Component {...pageProps} />
  </SessionProvider>
}

export default appWithTranslation(MyApp);