import { StaticImages } from '@/lib/static_images'
import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script async defer data-website-id="6d9f0847-fadf-4ac7-87f1-1b4388421fc4" src="https://umami.otterbots.dev/umami.js"></script>
      <title>onhcb.info</title>
      <link rel="icon" href={StaticImages.HCB_LOGO_DARK} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
