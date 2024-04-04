import { useRef, useState } from "react";
import { Link } from "./Link";
import { animated, useSpring } from "@react-spring/web";

const PROJECTS: {
  title: string;
  descriptionHtml: string;
  url?: string;
  codeUrl?: string;
  img?: string;
}[] = [
  {
    title: "Cadenza",
    descriptionHtml:
      "using transformers to generate piano masterpieces, built from scratch",
    url: "https://drive.google.com/drive/folders/1u8wGB-KTlGDOXULK6XkoH6LhYJYEucC_",
    codeUrl: "https://github.com/JinayJain/cadenza",
    img: "/img/project/cadenza.png",
  },
  {
    title: "Self-Driving 2D Racer",
    descriptionHtml:
      'reinforcement learning (PPO) to drive a virtual F1 car (cited in <a href="https://openreview.net/pdf?id=hWwY_Jq0xsN" class="underline hover:text-blue-500" target="_blank">ICLR 2023</a>)',
    url: "https://www.youtube.com/watch?v=s1uKkmNiNhM",
    codeUrl: "https://github.com/JinayJain/deep-racing",
    img: "/img/project/deep-racing.gif",
  },
  {
    title: "Memory Lane",
    descriptionHtml: "relive your memories in augmented reality",
    url: "https://twitter.com/jinaycodes/status/1677318180992155658",
    img: "/img/project/memory-lane.gif",
  },
  {
    title: "GPT Anywhere",
    descriptionHtml: "access GPT at the push of a button (1,400+ downloads)",
    url: "https://jinay.dev/gpt-anywhere/",
    codeUrl: "https://github.com/JinayJain/gpt-anywhere",
    img: "/img/project/gpt-anywhere.gif",
  },
  {
    title: "Eddy",
    descriptionHtml: "AI-assisted mind mapping at the speed of thought",
    url: "https://devpost.com/software/eddy-zx9uto",
    codeUrl: "https://github.com/joyliu-q/eddy",
    img: "/img/project/eddy.jpg",
  },
  {
    title: "Just a Minute",
    descriptionHtml:
      "how well can you estimate the length of a minute? (played 130k+ times)",
    url: "https://jinay.dev/just-a-minute/",
    codeUrl: "https://github.com/JinayJain/just-a-minute",
    img: "/img/project/just-a-minute.png",
  },
  {
    title: "Timekeeper",
    descriptionHtml: "using computer vision to tell the time",
    url: "https://blog.jinay.dev/posts/timekeeper/",
    codeUrl: "https://github.com/JinayJain/timekeeper",
    img: "/img/project/timekeeper.png",
  },
  {
    title: "Strand",
    descriptionHtml:
      "collaborative storytelling with a new, AI-generated prompt every day",
    url: "https://strand.jinay.dev/",
    img: "/img/project/strand.png",
  },
  {
    title: "Bounce",
    descriptionHtml: "multithreaded raytracer written in Rust",
    url: "https://github.com/JinayJain/bounce",
    codeUrl: "https://github.com/JinayJain/bounce",
    img: "/img/project/bounce.png",
  },
  {
    title: "Backpropagation Visualization",
    descriptionHtml:
      "explore the inner workings of backprop on a computation graph",
    url: "https://jinay.dev/backprop-vis/",
    codeUrl: "https://github.com/JinayJain/backprop-vis",
    img: "/img/project/backprop.gif",
  },
  {
    title: "Parallel Fluid Simulation",
    descriptionHtml: "fluid simulation on the GPU with OpenACC",
    url: "https://www.youtube.com/watch?v=wJig-ARfRPA",
    codeUrl: "https://github.com/JinayJain/fluid-sim",
    img: "/img/project/fluid-sim.gif",
  },
  {
    title: "Warp",
    descriptionHtml: "a link shortener that takes you through hyperspace",
    url: "https://to.jinay.dev/",
    codeUrl: "https://github.com/JinayJain/warp",
    img: "/img/project/warp.gif",
  },
  {
    title: "Dance Tool",
    descriptionHtml: "a video player built for learning dance",
    url: "https://dance.jinay.dev/",
    codeUrl: "https://github.com/JinayJain/play",
    img: "/img/project/dance-tool.png",
  },
];

function Project({ project }: { project: (typeof PROJECTS)[0] }) {
  const [props, api] = useSpring(() => ({
    opacity: 0,
  }));

  const onEnter = () => {
    api.start({
      opacity: 1,
      config: {
        duration: 300,
      },
    });
  };

  const onLeave = () => {
    api.start({
      opacity: 0,
      config: {
        duration: 100,
      },
    });
  };

  return (
    <li>
      <p onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <Link href={project.url}>{project.title}</Link>
        {project.codeUrl && (
          <span>
            {" "}
            [<Link href={project.codeUrl}>code</Link>]
          </span>
        )}
        : <span dangerouslySetInnerHTML={{ __html: project.descriptionHtml }} />
      </p>
      {project.img && (
        <animated.div style={props}>
          <img
            className="absolute max-h-[40vh] shadow-lg rounded-md transition-opacity pointer-events-none"
            src={project.img}
            alt={project.title}
          />
        </animated.div>
      )}
    </li>
  );
}

function MutedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
      />
    </svg>
  );
}

function UnmutedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
      />
    </svg>
  );
}

function Music() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="hidden lg:block">
      {/* TODO: add music */}

      <div className="inline-flex items-center space-x-2">
        <button
          onClick={toggle}
          className="border  border-gray-300 p-2 rounded-full hover:border-gray-500 hover:bg-gray-100 hover:bg-opacity-50 transition-all"
        >
          <span>{playing ? <UnmutedIcon /> : <MutedIcon />}</span>{" "}
        </button>

        <span className="text-gray-500 text-sm">
          Click to hear{" "}
          <Link
            href="https://github.com/JinayJain/cadenza"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Cadenza
          </Link>{" "}
          play piano
        </span>
      </div>

      <audio ref={audioRef} loop>
        <source src="/media/cadenza.mp3" />
      </audio>
    </div>
  );
}

function App() {
  return (
    <div className="bg-offwhite font-satoshi text-stone-800 min-h-screen">
      <div className="fixed top-4 left-4">
        <Music />
      </div>
      <div className="max-w-screen-md mx-auto px-4 py-16 space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Jinay Jain</h1>
          <h3 className="text-lg">
            SWE @ <Link href="https://www.virtu.com/">Virtu Financial</Link>.{" "}
            <Link href="https://neo.com/">Neo Scholar</Link>. Maker.
          </h3>
          <h4 className="text-md text-gray-500">
            Previously: <Link href="https://maticrobots.com/">Matician</Link>,{" "}
            <Link href="https://schoolhouse.world/">Schoolhouse.world</Link>,
            University of Delaware
          </h4>
        </div>

        <p>
          I try to create useful software using AI. On the side, I&apos;m also
          an amateur{" "}
          <Link href="https://www.instagram.com/jinay.photo/">
            photographer
          </Link>
          , filmmaker, dancer, and chef. I&apos;m currently based in New York
          City.
        </p>

        <ul className="md:inline-flex md:space-x-2">
          <li>
            <Link href="https://www.github.com/jinayjain/">GitHub</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/jinayjain/">LinkedIn</Link>
          </li>
          <li>
            <Link href="https://jjain.substack.com/">Blog</Link>
          </li>
          <li>
            <Link href="/files/resume.pdf">
              Resume
              {/* TODO: add link */}
            </Link>
          </li>
        </ul>

        <p>Email: hi [at] jinay [dot] dev</p>

        <div>
          <h3 className="text-lg font-bold">Projects</h3>

          {/* <p>
            I learn best by building, so are a few things I&apos;ve learned
            about:
          </p> */}

          <ul className="space-y-1">
            {PROJECTS.map((project) => (
              <Project key={project.title} project={project} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Awards</h3>

          <ul>
            <li>
              Best Use of NLP @{" "}
              <Link href="https://www.treehacks.com/">TreeHacks</Link>
            </li>
            <li>
              Best Audio Hack @{" "}
              <Link href="https://hacknyc.co/">
                NYC Generative AI Hackathon
              </Link>
            </li>
            <li>
              Best Use of IBM API @{" "}
              <Link href="https://ivyhacks.devpost.com/">IvyHacks</Link>
            </li>
            <li>
              Best Use of Google Cloud @{" "}
              <Link href="https://hacktx.com/">HackTX</Link>
            </li>
            <li>3x Google Code Jam, Round 2 Qualifier</li>
            <li>USA Computing Olympiad, Gold Division</li>
            <li>
              Best Meme @ <Link href="https://hackmit.org/">HackMIT</Link>{" "}
              <Link href="https://youtu.be/sQ2MuLk9_hU?t=1005">
                (yes, really)
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Writing</h3>

          <ul>
            <li>
              <Link href="https://jjain.substack.com/p/interfaces-all-the-way-down">
                Interfaces All The Way Down
              </Link>{" "}
              [
              <Link href="https://news.ycombinator.com/item?id=36836433">
                HN front page
              </Link>
              ] : How better interfaces lead to happier developers
            </li>
            <li>
              <Link href="https://jjain.substack.com/p/the-myth-of-the-finished-project">
                The Myth of the Finished Project
              </Link>
              : Why the best projects are never truly finished
            </li>
            <li>
              <Link href="https://blog.jinay.dev/posts/virality/">
                How My Toy Project Turned Into a Viral Challenge
              </Link>{" "}
              [
              <Link href="https://news.ycombinator.com/item?id=29393903">
                HN front page
              </Link>
              ] : The story of Just a Minute
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
