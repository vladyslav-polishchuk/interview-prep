import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import type { ReactNode } from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'Blog for learning JavaScript',
}: Props) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }} minHeight="100vh">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="../static/favicon.ico" />
      <meta
        name="description"
        content="The best blog for learning JavaScript."
      />
    </Head>

    <Header />

    <Container sx={{ flexGrow: 1 }}>{children}</Container>

    <Footer />
  </Box>
);

export default Layout;
