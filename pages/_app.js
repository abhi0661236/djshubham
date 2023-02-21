import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import Layout from '../layout';
import Script from 'next/script';
import AdminLayout from '@/layout/AdminLayout';

export default function App({ Component, pageProps, router }) {


  if (router.isReady) {
    const pathname = router.state.pathname;

    if (pathname.startsWith('/admin')) {
      return (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      )
    }
  }




  return (
    <Layout>
      <Script src='https://apis.google.com/js/platform.js' strategy='afterInteractive' />
      <Component {...pageProps} />
    </Layout>
  )
}
