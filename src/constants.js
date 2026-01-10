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
import shortify from "./assets/work_logo/Shortify.png";
import kidney from "./assets/work_logo/kidney.png";
import movie from "./assets/work_logo/movie.png";
import JobPortal from "./assets/work_logo/JobPortal.png";
import AIFitnessApp from "./assets/work_logo/AIFitnessApp.png";

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
    title: "Job Portal (Microservice)",
    description:
      "Built a large-scale job portal platform using Spring Boot, ReactJS, Redux, and Docker, with services for Auth, User, Profile, Job & Notification. Integrated Kafka, RabbitMQ, Feign, Redis, MongoDB, and MySQL for communication, caching, and persistence. Implemented JWT-based authentication, role-based",
    image: JobPortal,
    tags: [
      "React",
      "Spring Boot",
      "MongoDB",
      "MySQL",
      "Eureka Server",
      "Kafka",
      "JWT",
      "Role-based Auth",
      "TailwindCSS",
      "Spring Security",
    ],
    github: "https://github.com/sneharkive/JobPortal-NextRole",
    webapp: "https://jobportalfrontend-4p43.onrender.com",
  },
  {
    id: 1,
    title: "Kidney Disease Classification (MLOps Pipeline)",
    description: "An end-to-end deep learning pipeline for kidney disease classification built using TensorFlow, MLflow, and DVC. The project includes training and inference pipelines with experiment tracking, model versioning, Dockerized deployment, and CI/CD on AWS, achieving 87% accuracy and a 0.88 F1-score.",
    image: kidney,
    tags: [
      "Python",
      "TensorFlow",
      "MLflow",
      "DVC",
      "Docker",
      "AWS",
      "Flask",
    ],
    github: "https://github.com/sneharkive/Kidney-Disease-Classification-DL",
    webapp: "https://kidney-disease-classification-dl-1.onrender.com",
  },
  {
    id: 2,
    title: "AI Fitness Tracker (Microservice)",
    description:
      "Developed a fitness tracking application using a microservice architecture with Spring Boot, Spring Cloud, Eureka Server, API Gateway, and ReactJS. Designed four independent services—User, Activity, Suggestion, and Tracking. Enhanced with an AI module to deliver personalized activity suggestions and secure authentication using Spring Security and JWT.",
    image: AIFitnessApp,
    tags: [
      "React",
      "Spring Boot",
      "Spring AI",
      "MongoDB",
      "MySQL",
      "JWT",
      "RabbitMQ",
      "Eureka Server",
      "TailwindCSS",
      "Spring Security",
    ],
    github: "https://github.com/sneharkive/JobPortal-NextRole",
    webapp: "https://jobportalfrontend-4p43.onrender.com",
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description: "A machine learning–powered movie recommendation system built using scikit-learn, FastAPI, and Streamlit. The app provides personalized movie recommendations through a RESTful API, with an interactive Streamlit interface for real-time user interaction and predictions.",
    image: movie,
    tags: [
      "Python",
      "FastAPI",
      "Streamlit",
      "NumPy",
      "Pandas",
      "Scikit-learn",
    ],
    github: "https://github.com/sneharkive/MoviesRecSystemML/tree/main",
    webapp: "https://moviesrecsystemml-79k7a3pxgkiysrt2nujymb.streamlit.app/",
  },
  {
    id: 4,
    title: "URL Shortener App",
    description:
      "A full-stack URL shortening app with JWT-based authentication, MySQL storage, and real-time link analytics displayed using interactive charts. Built with ReactJS for the frontend and Spring Boot for the backend, featuring responsive design with Tailwind CSS.",
    image: shortify,
    tags: [
      "React",
      "Spring Boot",
      "Spring AI",
      "MongoDB",
      "MySQL",
      "JWT",
      "RabbitMQ",
      "Eureka Server",
      "TailwindCSS",
      "Spring Security",
    ],
    github: "https://github.com/sneharkive/JobPortal-NextRole",
    webapp: "https://jobportalfrontend-4p43.onrender.com",
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
