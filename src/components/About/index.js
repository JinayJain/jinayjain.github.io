import styles from "./styles.module.scss";

import { FaGithub, FaLinkedin, FaEnvelope, FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className={`container ${styles.section}`}>
      <div className={styles.links}>
        <a
          href="https://github.com/JinayJain/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jinayjain/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:hi@jinay.dev">
          <FaEnvelope /> Email
        </a>
        <a href="https://blog.jinay.dev/" target="_blank" rel="noreferrer">
          <FaQuoteLeft /> Blog
        </a>
      </div>

      <h3 className={styles.greeting}>Hi, I'm Jinay</h3>
      <p>
        I'm a senior at the University of Delaware studying computer science and
        a <a href="https://neo.com/">Neo Scholar</a>. I am passionate about
        learning as much as I can about the world around me and building
        impactful software with that knowledge. In the past, I've interned at
        two startups: <a href="https://schoolhouse.world/">Schoolhouse.world</a>
        , an online peer-to-peer tutoring platform, and{" "}
        <a href="https://matician.com/">Matician</a>, an autonomous robotics
        company. More recently, I interned at{" "}
        <a href="https://www.virtu.com/">Virtu Financial</a> (quant trading)
        where I improved their high-throughput order management system.
      </p>
    </div>
  );
};

export default About;
