import styles from './index.module.css';
import LoginButton from '../LoginButton';
import Logo from '../Logo';
import { useSession } from 'next-auth/react';
import ProfileButton from '../ProfileButton';
import { User } from 'next-auth';

export default function MainHeader() {
  const { data } = useSession();
  const user = data?.user;

  return (
    <header className={styles.root}>
      <div className={styles['header-nav']}>
        <Logo />
        <nav></nav>
        {user ? <ProfileButton user={user as User} /> : <LoginButton />}
      </div>
      <div className={styles['header-content']}>
        <h1 className={styles['header-content-title']}>
          200 Coding Interview Questions
        </h1>
        <p className={styles['header-content-description']}>
          The practice you need to ace the coding interviews.
        </p>
      </div>
    </header>
  );
}
