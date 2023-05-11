import Link from "next/link";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
const Header = () => {
  const [scrolledHead, setScrolledHead] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setScrolledHead(true);
      } else {
        setScrolledHead(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <header
      className={
        scrolledHead
          ? styles.header + " " + styles.scrolledHeader
          : styles.header
      }
    >
      <nav>
        <Link href="/">head</Link>
        <Link href="/">head</Link>
        <Link href="/">head</Link>
        <Link href="/">head</Link>
      </nav>
    </header>
  );
};

export default Header;
