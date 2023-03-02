import Navbar from '@/components/Navbar';
import '@/styles/globals.scss';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const showHeader = router.pathname === '/' ? false : true;
  return(
    <>
      {showHeader &&  <Navbar/>}
      <Component {...pageProps} />
    </>
  )
}
