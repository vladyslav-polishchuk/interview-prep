import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import Link from './Link';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{ backgroundColor: theme.palette.primary.main, mt: 2, py: 2 }}
    >
      <Container sx={{ display: 'flex' }}>
        <Typography alignSelf="center" sx={{ flexGrow: 1 }} color="white">
          Copyright © 2022
        </Typography>

        <Stack direction="row" spacing={2}>
          <Link href="/about" sx={{ color: 'white' }}>
            About
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
