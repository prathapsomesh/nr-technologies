import Head from 'next/head';
import { Inter } from 'next/font/google';
import HomeComponent from '@/Components/Home/Home';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>New Raj Technologies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nrt.png" />
      </Head>
      <main>
        <HomeComponent />
      </main>
    </>
  );
}
