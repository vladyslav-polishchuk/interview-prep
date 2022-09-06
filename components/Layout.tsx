import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import type { ReactNode } from 'react';
import Container from '@mui/material/Container';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="../static/favicon.ico" />
    </Head>

    <Header />

    <Container maxWidth="md">{children}</Container>

    <Footer />
  </div>
);

export default Layout;
