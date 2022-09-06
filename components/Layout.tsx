import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import type { ReactNode } from 'react';
import Container from '@mui/material/Container';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'Blog for learning JavaScript',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="The best blog for learning JavaScript."
      />
    </Head>

    <Header />

    <Container maxWidth="md">{children}</Container>

    <Footer />
  </div>
);

export default Layout;
