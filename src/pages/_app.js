import NavbarTop from '@/Components/NavbarTop/NavbarTop';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarTop />
      <Component {...pageProps} />
    </>
  );
}
