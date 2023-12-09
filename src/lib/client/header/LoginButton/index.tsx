import styles from './index.module.css';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function LoginButton() {
  return (
    <button className={styles.root} onClick={() => signIn('google')}>
      <Image
        src="/google.svg"
        alt="Google Logo"
        className="dark:invert mb-32"
        width={20}
        height={20}
        priority
      />
      Log In
    </button>
  );
}
