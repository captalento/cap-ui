import { DSProvider } from '@captalento/design-system';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DSProvider>
      {/* add layout here */}
      <Component {...pageProps} />
    </DSProvider>
  )
}
