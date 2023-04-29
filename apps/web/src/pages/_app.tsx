import Head from 'next/head';

import { DSProvider } from '@captalento/design-system';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DSProvider>
      <Head>
        <title>Home</title>
      </Head>
      {/* add layout here */}
      <Component {...pageProps} />
    </DSProvider>
  )
}
