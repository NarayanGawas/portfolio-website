// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
 

// Experience Section Logo's
import devine from './assets/company_logo/devine.jpg';
import codetech from './assets/company_logo/codetech.jpg';
 
// Education Section Logo's
import trinity from './assets/education_logo/trinity.png';
import logo12th from './assets/education_logo/logo12th.jpg';
import mvs from './assets/education_logo/mvs.webp';

// Project Section Logo's
import spotify from './assets/work_logo/spotify.png';
import treading from './assets/work_logo/treading.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import air from './assets/work_logo/air.png';
import login from './assets/work_logo/login.png';
import simon from './assets/work_logo/simon.png';
 


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },    
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },   
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: devine,
      role: "Frontend Developer",
      company: "Devine Tech Solutions",
      date: "February 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        
        
      ],
    },
    {
      id: 1,
      img: codetech,
      role: "Web Developer",
      company: "Codetech IT Solutions",
      date: "December-2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        
      ],
    },
     
  ];
  
  export const education = [
    {
      id: 0,
      img: trinity,
      school: "Trinity college of engineering and research",
      date: "Nov 2022 - June 2026",
      grade: "8.10 CGPA",
      desc: "I am currently pursuing my final year of Information Technology, where I am building strong skills in software development, web technologies, databases, and problem-solving. I enjoy working on real-world projects that help me improve my technical knowledge and hands-on experience. I am passionate about learning new technologies and preparing myself for a successful career in the IT industry.",
      degree: "Bachelor of engineering in information technology",
    },
    {
      id: 1,
      img: logo12th,
      school: "DODAMARG ENGLISH SCHOOL & JR.COLLEGE DODAMARG",
      date: "june 2020 - Feb 2022",
      grade: "63.50%",
      desc: "I completed my class 12 education from DODAMARG ENGLISH SCHOOL & JR.COLLEGE DODAMARG under the hsc board, where I studied Physics, Chemistry, and Mathematics (PCMB) with Infomation Technology.",
      degree: "HSC(XII) -PCMB with Information Technology",
    },
  
    {
      id: 2,
      img: mvs,
      school: "MADHYAMIK VIDYALAY SONAWAL",
      date: "June 2019 - March 2020",
      grade: "92.20%",
      desc: "I completed my Secondary School Certificate (SSC) education from Madhyamik Vidyalay Sonawal. This stage helped me build a strong academic base and develop essential skills that prepared me for higher education.",
      degree: "Secondary School Certificate - SSC(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Spotify clone",
      description:
        "My Spotify Clone is a clean and responsive music streaming web app inspired by Spotify. It allows users to browse playlists, select songs, and control playback with an intuitive and modern interface. The project focuses on delivering smooth UI interactions, fast performance, and a visually appealing design using React, CSS, and JavaScript.",
      image:  spotify,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/NarayanGawas/spotify-clone",
      webapp: "#",
    },
    {
      id: 1,
      title: "Stock treading Platform",
      description:
        "My Stock Trading Platform is a user-friendly web application that allows users to track real-time stock prices, view market trends, and manage their investment portfolio. It provides an intuitive dashboard, interactive charts, and smooth navigation to help users make informed trading decisions. The platform focuses on clean UI, fast performance, and a seamless experience for both beginners and experienced traders.",
      image: treading,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NarayanGawas/Dashboard",
      webapp: "#",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NarayanGawas/Movie-Recommendation-project",
      webapp: "https://movie-recommendation-project-idea.onrender.com",
    },
    {
      id: 3,
      title: "Airbnb Clone",
      description:
        "My Airbnb Clone is a responsive accommodation booking platform where users can explore rental homes, view property details, and book stays easily. It features an intuitive interface, location-based listings, and clean UI elements that simplify the search and booking experience. The project focuses on smooth navigation, modern design, and a user-friendly experience inspired by Airbnb’s layout and functionality.",
      image: air,
      tags: ["html","Css","Javascript","Node.js", "NPM",],
      github: "https://github.com/NarayanGawas/Airbnb-website",
      webapp: "#",
    },
    {
      id: 4,
      title: "Login System",
      description:
        "My Login System is a secure and user-friendly authentication module that allows users to register, log in, and access protected pages safely. It includes essential features like form validation, password encryption, and error handling to ensure a smooth user experience. The design is clean, responsive, and easy to integrate into web applications, making it a reliable foundation for user authentication.",
      image: login,
      tags: ["JavaScript", "Nodejs","MongoDb","Express", "HTML", "CSS"],
      github: "https://github.com/NarayanGawas/login-concept",
      webapp: "https://login-concept-omega.vercel.app/login",
    },
    {
      id: 5,
      title: "Simon Says Game",
      description:
        "My Simon Says Game is a fun and interactive memory-based game where players repeat a growing sequence of colors and sounds. Each round adds a new step to the pattern, challenging the player’s focus and memory skills. The game features smooth animations, responsive design, and engaging visual feedback, making it an enjoyable and addictive experience for users of all ages.",
      image: simon,
      tags: ["HTML", "CSS", "JavaScript",],
      github: "https://github.com/NarayanGawas/Simon-says-game-",
      webapp: "#",
    },
    
  ];  