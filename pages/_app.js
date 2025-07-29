// pages/_app.js
import '../pages/globals.css';
import './css/landingPage.css';
import './css/contactUs.css';
import './css/aboutus.css';
import Head from 'next/head'; // Make sure this is imported

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/Logo.ico" />
        <title>Aether Web Development Services - Desain Responsif & Pengalaman Pengguna Terbaik</title>
        <meta name="description" content="Aether menyediakan layanan pengembangan web profesional. Kami menciptakan antarmuka intuitif, desain responsif, dan pengalaman pengguna yang mulus untuk bisnis Anda. Dapatkan konsultasi gratis sekarang!" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}