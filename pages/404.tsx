import Link from '../components/Link';
import { Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Typography variant="h2">404</Typography>
      <Typography variant="h4">Sorry, Page Not Found</Typography>
      <Typography variant="body1">
        <Link href="/">Go to home page.</Link>
      </Typography>
    </Box>
  );
};

export default NotFound;
