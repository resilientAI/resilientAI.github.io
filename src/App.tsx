import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import Layout from './components/Layout';

function App({ Component, pageProps }: any) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default App;
