import styles from "./styles.module.scss";

const TAGS = {
  PYTORCH: "PyTorch",
  RL: "Reinforcement Learning",
  CV: "Computer Vision",
  FIREBASE: "Firebase",
  MONGODB: "MongoDB",
  RUST: "Rust",
  OPENCV: "OpenCV",
  WEB_STACK: "HTML/CSS/JS",
  PYTHON: "Python",
  REACT: "React",
  NEXTJS: "Next.js",
  SQL: "SQL",
  GPT: "GPT-3",
};

const PROJECTS = [
  {
    title: "Self-Driving Racecar",
    description:
      "A virtual self-driving car that uses computer vision and deep reinforcement learning (PPO) to navigate a 2D game.",
    image: "/img/project/car.gif",
    tags: [TAGS.PYTORCH, TAGS.RL, TAGS.CV, TAGS.PYTHON],
    link: "https://github.com/JinayJain/deep-racing",
  },
  {
    title: "Bounce",
    description:
      "A Rust-based ray tracer with support for multithreading, bounding volume hierarchies, .obj file loading, and more.",
    image: "/img/project/bounce.png",
    tags: [TAGS.RUST],
    link: "https://github.com/JinayJain/bounce",
  },
  {
    title: "Just a Minute",
    description:
      "A web experiment to see how well you can estimate a minute, played over 100k times.",
    image: "/img/project/just-a-minute.png",
    tags: [TAGS.WEB_STACK, TAGS.FIREBASE],
    link: "https://jinay.dev/just-a-minute/",
  },
  {
    title: "GPT Anywhere",
    description:
      "A desktop app that lets you use GPT-3 at the press of a button.",
    image: "/img/project/gpt-anywhere.gif",
    tags: [TAGS.REACT, TAGS.RUST, TAGS.GPT],
    link: "https://jinay.dev/gpt-anywhere/",
  },
  {
    title: "Backpropagation Visualization",
    description:
      "A tool to help visualize the use of backpropagation on a computation graph and auto-differentiation engine.",
    image: "/img/project/backprop.gif",
    tags: [TAGS.WEB_STACK],
    link: "https://jinay.dev/backprop-vis/",
  },
  {
    title: "Timekeeper",
    description:
      "Telling the time from a picture of an analog clock with computer vision with OpenCV and PyTorch.",
    image: "/img/project/timekeeper.png",
    tags: [TAGS.PYTORCH, TAGS.CV, TAGS.PYTHON],
    link: "https://github.com/JinayJain/timekeeper",
  },
  {
    title: "Warp",
    description:
      "A link shortener that takes you through space at warp speed with Google Cloud and MongoDB",
    image: "/img/project/warp.gif",
    tags: [TAGS.MONGODB, TAGS.WEB_STACK],
    link: "https://to.jinay.dev/",
  },
  {
    title: "Dance Tool",
    description: "The ultimate dance practice tool with over 300 users",
    image: "/img/project/dance-tool.png",
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.SQL],
    link: "https://dance.jinay.dev/",
  },
];

const Projects = () => {
  return (
    <div className="container" id="projects">
      <h1 className="header">Projects</h1>
      <div className={styles.cardBox}>
        {PROJECTS.map(({ title, description, image, tags, link }) => (
          <a
            className={styles.cardlink}
            href={link}
            key={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.card}>
              <img src={image} alt={title} className={styles.bg} />
              <p className={styles.tags}>
                {tags.map((tag, index) => (
                  <>
                    <span key={tag}>{tag}</span>
                    {index !== tags.length - 1 && <span>/</span>}
                  </>
                ))}
              </p>
              <div className={styles.info}>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>{" "}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
