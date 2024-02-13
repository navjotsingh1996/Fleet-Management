import styles from "./Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="/assets"> Assets </Link>
        </li>
        <li>
          <Link href="/drivers"> Drivers </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
