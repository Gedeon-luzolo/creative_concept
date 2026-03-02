import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaReact,
  FaGitAlt,
  FaServer,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";

export const programmeNotions = [
  {
    icon: <FaCode className="text-white text-2xl" />,
    title: "HTML5 & Sémantique",
    details:
      "Structure moderne des pages web, balises sémantiques, accessibilité et SEO.",
  },
  {
    icon: <FaPalette className="text-white text-2xl" />,
    title: "CSS3 & Design",
    details:
      "Flexbox, Grid, animations, responsive design et frameworks CSS modernes.",
  },
  {
    icon: <FaLaptopCode className="text-white text-2xl" />,
    title: "JavaScript ES6+",
    details:
      "Syntaxe moderne, DOM manipulation, événements, async/await et APIs.",
  },
  {
    icon: <FaReact className="text-white text-2xl" />,
    title: "React JS",
    details:
      "Components, hooks, state management, routing et création d'applications.",
  },
  {
    icon: <FaGitAlt className="text-white text-2xl" />,
    title: "Git & GitHub",
    details:
      "Versioning, collaboration, branches, pull requests et workflow professionnel.",
  },
  {
    icon: <FaServer className="text-white text-2xl" />,
    title: "Déploiement",
    details:
      "Mise en ligne gratuite sur Vercel, Netlify et gestion de domaines.",
  },
  {
    icon: <FaMobileAlt className="text-white text-2xl" />,
    title: "Responsive Design",
    details:
      "Mobile-first, media queries, adaptation multi-écrans et performance.",
  },
  {
    icon: <FaRobot className="text-white text-2xl" />,
    title: "IA & Outils",
    details:
      "Utilisation de l'IA pour coder plus vite, debugging et bonnes pratiques.",
  },
];
