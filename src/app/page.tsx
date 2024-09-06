import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../../components/Hero';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hepta</title>
        <meta name="description" content="Welcome to Hepta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        {/* Other sections will go here */}
      </main>
    </div>
  );
};

export default Home;
