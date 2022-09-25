import { useSession, signIn, signOut } from 'next-auth/react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from '../Link';
import UserMenu from './UserMenu';

export default function Header() {
  const { data: session } = useSession();

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex' }} disableGutters component={Container}>
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            alignItems: 'baseline',
            gap: '16px',
          }}
        >
          <Link href="/">
            <Typography sx={{ cursor: 'pointer' }} variant="h4">
              Home
            </Typography>
          </Link>

          <Link href="/questions">
            <Typography sx={{ cursor: 'pointer' }} variant="h5">
              Questions
            </Typography>
          </Link>
        </Box>

        {session ? (
          <UserMenu user={session.user} signOut={signOut} />
        ) : (
          <Button color="inherit" onClick={() => signIn()}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
