import styles from './index.module.css';
import LoginButton from '../LoginButton';
import Logo from '../Logo';

export default function MainHeader() {
  return (
    <header className={styles.root}>
      <div className={styles['header-nav']}>
        <Logo />
        <nav></nav>
        <LoginButton />
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
