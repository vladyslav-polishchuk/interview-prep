import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

export default function HomeButton() {
  return (
    <Link className={styles.root} href="/">
      <Image src="/logo.svg" alt="" width={25} height={27} />
      <span className={styles.title}>AlgoExpert</span>
    </Link>
  );
}
