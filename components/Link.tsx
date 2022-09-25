import NextLink from 'next/link';
import { Link as MuiLink, type SxProps } from '@mui/material';
import type { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  sx?: SxProps;
}

export default function Link(props: LinkProps) {
  const { href, children, sx = {} } = props;

  return (
    <NextLink href={href}>
      <MuiLink
        sx={{ cursor: 'pointer', ...sx }}
        color="inherit"
        underline="none"
      >
        {children}
      </MuiLink>
    </NextLink>
  );
}
