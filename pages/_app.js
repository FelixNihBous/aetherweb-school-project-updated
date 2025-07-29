import '../pages/globals.css'
import './css/landingPage.css'
import './css/contactUs.css'
import './css/aboutus.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
