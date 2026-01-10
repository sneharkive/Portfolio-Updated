// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import kafka from "./assets/tech_logo/kafka.png";
import rabbit from "./assets/tech_logo/RabbitMQ.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import springbootLogo from "./assets/tech_logo/springboot.png";

import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import docker from "./assets/tech_logo/Docker.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";

import postgreLogo from "./assets/tech_logo/postgre.png";
import linuxLogo from "./assets/tech_logo/Linux.png";
import jupyterLogo from "./assets/tech_logo/jupyter.png";
import anacondaLogo from "./assets/tech_logo/Anaconda.png";
import colabLogo from "./assets/tech_logo/colab.png";
import awsLogo from "./assets/tech_logo/AWS.png";
import PyCharm from "./assets/tech_logo/PyCharm.png";
import PyTorch from "./assets/tech_logo/PyTorch.png";
import Pandas from "./assets/tech_logo/Pandas.png";
import scikit from "./assets/tech_logo/scikit-learn.png";
import NumPy from "./assets/tech_logo/NumPy.png";
import Langchain from "./assets/tech_logo/Langchain.png";
import TensorFlow from "./assets/tech_logo/TensorFlow.png";
import Matplotlib from "./assets/tech_logo/Matplotlib.png";
import OpenCV from "./assets/tech_logo/OpenCV.png";
import dvc from "./assets/tech_logo/dvc.svg";
import mlflow from "./assets/tech_logo/mlflow.png";



// Experience Section Logo's
// import webverseLogo from "./assets/company_logo/webverse_logo.png";
// import agcLogo from "./assets/company_logo/agc_logo.png";
// import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import uem from "./assets/education_logo/uem.png";
import cu from "./assets/education_logo/cu.png";
import hs from "./assets/education_logo/hs.png";
import sec from "./assets/education_logo/sec.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Apache Kafka", logo: kafka },
      { name: "RabbitMQ", logo: rabbit },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
  title: "AI / ML",
  skills: [
    { name: "NumPy", logo: NumPy },
    { name: "Pandas", logo: Pandas },
    { name: "Matplotlib", logo: Matplotlib },
    { name: "Scikit-learn", logo: scikit },
    { name: "PyTorch", logo: PyTorch },
    { name: "TensorFlow", logo: TensorFlow },
    { name: "LangChain", logo: Langchain },
    { name: "OpenCV", logo: OpenCV },
    { name: "MLflow", logo: mlflow },
    { name: "DVC", logo: dvc },
  ],
},

  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Docker", logo: docker },
      { name: "VS Code", logo: vscodeLogo },
      { name: "PyCharm", logo: PyCharm },
      { name: "Postman", logo: postmanLogo },
      { name: "Linux", logo: linuxLogo },
      { name: "Jupyter Notebook", logo: jupyterLogo },
      { name: "Anaconda", logo: anacondaLogo },
      { name: "Google Colab", logo: colabLogo },
      { name: "AWS", logo: awsLogo }, 
    ],
  },
];


export const education = [
  {
    id: 0,
    img: uem,
    school: "University of Engineering & Management, Kolkata",
    date: "Oct 2024 - July 2026",
    grade: "9.35 CGPA",
    desc: "Completed my MCA at University of Engineering & Management, Kolkata, with a strong foundation in core CS concepts including Data Structures & Algorithms, OOP, DBMS, Operating Systems, and Software Engineering. Gained hands-on experience in AI, Machine Learning, Deep Learning, and NLP, along with full-stack web development using Spring Boot and React. Built multiple projects applying these skills to solve real-world problems.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: cu,
    school: "University of Calcutta, Kolkata",
    date: "Sept 2020 - Aug 2023",
    grade: "7.92 CGPA",
    desc: "Completed my B.Sc. in Physics from Vivekananda College, Thakurpukur (University of Calcutta). Gained strong analytical and problem-solving skills through physics coursework, used Python (NumPy, SciPy, Matplotlib) for numerical problem-solving, and studied Computer Science fundamentals including Data Structures, Operating Systems, and C programming.",
    degree: "Bachelor of Science - BSC (Physics)",
  },
  {
    id: 2,
    img: hs,
    school: "Vidyanagar Balika Vidylaya, Vidyanagar",
    date: "Apr 2019 - March 2020",
    grade: "83.83%",
    desc: "I completed my class 12 education from Vidyanagar Balika Vidylaya, under the WBCHSE  board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "WBCHSE (XII) - PCM",
  },
  {
    id: 3,
    img: sec,
    school: "Vidyanagar Balika Vidylaya, Vidyanagar",
    date: "Jan 2017 - March 2018",
    grade: "90.28%",
    desc: "I completed my class 10 education from Vidyanagar Balika Vidylaya, under the WBBSE board, where I studied Science with Computer.",
    degree: "WBBSE(X)",
  },
];


export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Coding Master",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 7,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Background-Remover",
    webapp: "https://removeyourbg.netlify.app/",
  },
];


// export const experiences = [
//   {
//     id: 0,
//     img: webverseLogo,
//     role: "Fullstack Developer",
//     company: "Webverse Digital",
//     date: "April 2024 - Present",
//     desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React JS",
//       "TypeScript",
//       "Node JS",
//       "Tailwind CSS",
//       "MongoDb",
//       "Redux",
//       " Next Js",
//     ],
//   },
//   {
//     id: 1,
//     img: agcLogo,
//     role: "Fullstack Engineer",
//     company: "Agumentik Group of Companies",
//     date: "July 2023 - March 2024",
//     desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
//     skills: [
//       "ReactJS",
//       "Redux",
//       "JavaScript",
//       "Tailwind CSS",
//       "HTML",
//       "CSS",
//       "SQL",
//     ],
//   },
//   {
//     id: 2,
//     img: newtonschoolLogo,
//     role: "Frontend Intern",
//     company: "Newton School",
//     date: "September 2021 - August 2022",
//     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
//     skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
//   },
// ];

