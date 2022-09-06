import { useSession, signIn, signOut } from 'next-auth/react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import Link from './Link';

export default function Header() {
  const { data: session } = useSession();

  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', gap: '16px' }}>
        <Link href="/">
          <Typography sx={{ cursor: 'pointer' }} variant="h4">
            Home
          </Typography>
        </Link>

        <Link href="/about">
          <Typography sx={{ cursor: 'pointer' }} variant="h5">
            About
          </Typography>
        </Link>

        <Link href="/api/questions">Questions API</Link>

        {session && (
          <>
            <Avatar src={session.user.image} />
            <Typography variant="h5">
              Welcome, {session.user.name || session.user.email}
            </Typography>
          </>
        )}

        {session ? (
          <Button color="inherit" onClick={() => signOut()}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" onClick={() => signIn()}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
