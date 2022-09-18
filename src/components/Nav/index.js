import styles from "./styles.module.scss";

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
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.nav}>
        <a href="/" className={styles.logo}>
          <h1>
            <span className="fg">JINAY</span> JAIN
          </h1>
        </a>
        <ul className={styles.links}>
          {LINKS.map(({ label, path }) => (
            <li key={label}>
              <a href={path}>{label}</a>
            </li>
          ))}
        </ul>

        <a href="mailto:hi@jinay.dev" className={styles.cta}>
          hi@jinay.dev
        </a>
      </div>
    </nav>
  );
};

export default Nav;
