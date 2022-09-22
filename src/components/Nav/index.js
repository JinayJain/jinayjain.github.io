import styles from "./styles.module.scss";
import { useState } from "react";

// about, projects, experience, awards, contact

const LINKS = [
  {
    label: "ABOUT",
    path: "#about",
  },
  {
    label: "PROJECTS",
    path: "#projects",
  },
  {
    label: "RESUME",
    path: "/files/JainJinay2023.pdf",
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.nav}>
        <a href="/" className={styles.logo}>
          <h1>
            <span className="fg">JINAY</span> JAIN
          </h1>
        </a>
        <ul
          className={isOpen ? `${styles.links} ${styles.open}` : styles.links}
        >
          {LINKS.map(({ label, path }) => (
            <li key={label} onClick={() => setIsOpen(false)}>
              <a href={path}>{label}</a>
            </li>
          ))}
        </ul>

        <a href="mailto:hi@jinay.dev" className={styles.cta}>
          hi@jinay.dev
        </a>

        <div
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`${styles.line}`}></div>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.line}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
