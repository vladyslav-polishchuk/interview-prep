import styles from './index.module.css';
import Image from 'next/image';
import { User } from 'next-auth';

export default function ProfileButton({ user }: { user: User }) {
  return (
    <button className={styles.root}>
      {user.image && (
        <Image
          src={user.image}
          alt="Profile Icon"
          className={styles.image}
          width={35}
          height={35}
          priority
        />
      )}
      {user?.name}
    </button>
  );
}
