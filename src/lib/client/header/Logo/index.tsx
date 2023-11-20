import Link from 'next/link';
import styles from './index.module.css';
import Image from 'next/image';
import LoginButton from '../LoginButton';

export default function Logo() {
  return (
    <Link href="/" className={styles.root}>
      <div className={styles.container}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className={styles.icon}
        />
        <h1 className={styles.title}>AlgoExpert</h1>
      </div>
      <div className={styles.subtitle}>Ace the Technical Interviews</div>
    </Link>
  );
}
