import { StaticImages } from '@/lib/static_images'
import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>onhcb.info</title>
      <link rel="icon" href={StaticImages.HCB_LOGO_DARK} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
