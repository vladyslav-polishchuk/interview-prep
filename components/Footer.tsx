import { Container, Divider } from '@mui/material';
import Link from './Link';

export default function Footer() {
  return (
    <footer>
      <Divider />

      <Container>
        <span>I&apos;m here to stay (Footer)</span>
        <Link href="/contributors">Contributor</Link>
      </Container>
    </footer>
  );
}
