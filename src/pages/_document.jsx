import { Html, Head, Main, NextScript } from 'next/document'

import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <link rel="shortcut icon" href='../public/favicon.ico' />
      <title>Busca de processos</title>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
