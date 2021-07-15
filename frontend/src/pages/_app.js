import Head from "next/head";
import React from 'react';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

function App({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Head>
        <title>Pokedex Web</title>
        <link rel="shortcut icon" href="/static/img/" />
        <link rel="apple-touch-icon" href="/static/img/" />
        <meta
          property="og:image"
          content="/static/img/"
        ></meta>

        <meta
          property="og:title"
          content="Pokedex Web Project"
        />
        <meta
          property="og:description"
          content="A new way of catching'em all"
        ></meta>
        <meta
          name="description"
          content="A new way of catching'em all"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default App;
