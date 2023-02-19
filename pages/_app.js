import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import Layout from '../layout';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Script src='https://apis.google.com/js/platform.js' strategy='afterInteractive' />
      <Component {...pageProps} />
    </Layout>
  )
}
