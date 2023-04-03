import '../tailwind/tailwind.css'
import { AppProps } from 'next/app'

import React from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
