import theme from '@hackclub/theme';
import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'theme-ui';
import "@/styles/util.scss";
export default function App({ Component, pageProps }: AppProps) {
  return (
    // @ts-expect-error
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
