/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Samerth Pathak",
  title: "Hi all, I'm Samerth",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript /Pyhton / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Qlv2FKOuij68oY6n0UXcg076biQ1K1xx/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/samerth",
  linkedin: "https://www.linkedin.com/in/samerth-pathak",
  gmail: "spsamerthpathak@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPERIENCED FULL STACK DEVELOPER WITH A PASSION FOR EXPLORING NEW TECHNOLOGIES",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"),
    emoji("⚡ Build robust backend systems and APIs using modern technologies"),
    emoji("⚡ Integration of third-party services such as Firebase, AWS, and Digital Ocean"),
    emoji("⚡ Implement secure authentication and authorization mechanisms"),
    emoji("⚡ Develop and deploy Progressive Web Applications (PWA)"),
    emoji("⚡ Perform data analysis and visualization to support decision-making")
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angularjs",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c-sharp",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "dot-net",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Canada West",
      logo: require("./assets/images/ucw_logo.jpg"),
      subHeader: "MBA (Data Analytics)",
      duration: "January 2023 - September 2024",
      // desc: "Participated in the research of Data Analytics and published 3 papers.",
      // descBullets: [
      //   "Conducted research on data-driven decision-making",
      //   "Analyzed large datasets using advanced analytics tools"
      // ]
    },
    {
      schoolName: "SRM University",
      logo: require("./assets/images/Srm_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - April 2020",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, and more.",
      // descBullets: ["Developed a web application as a final year project"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student Assistant (Software Projects)",
      company: "University Canada West",
      companylogo: require("./assets/images/ucw_logo.jpg"),
      date: "May 2023 – Present",
      desc: "Engineered applications and systems for educational purposes, significantly improving efficiency and user satisfaction.",
      descBullets: [
        "Developed PDF Master, a Flask application to automate extraction and processing of course and textbook data from PDFs, reducing project timeline by 50% and achieving 95% data accuracy.",
        "Worked on the peer tutor registration portal for the university student website, implementing a 5-page workflow for program information, tutor search by subject, and appointment booking.",
        "Developed an API to retrieve user interaction statistics from book publishers, improving real-time data accessibility by 30%.",
        "Automated the book renewal process, reducing manual renewal requests by 25% and enhancing overall user satisfaction."
      ]
    },
    {
      role: "Software Engineer",
      company: "BusinessNext",
      companylogo: require("./assets/images/Businessnext_logo.jpg"),
      date: "Jan 2020 – Dec 2022",
      desc: "Led and contributed to major projects, enhancing system security, data processing efficiency, and user satisfaction.",
      descBullets: [
        "Led a $5 million CRM implementation project for TransUnion, managing a team of 4 developers, providing training, documentation, and post-live support, resulting in a 20% increase in user satisfaction and a 15% reduction in system downtime.",
        "Created a comprehensive multi-factor authentication system in C# with .NET Core, incorporating OAuth 2.0 and secure token management, enhancing system security by 50% and increasing user trust and reliability by 30%.",
        "Developed a mortgage dashboard using jQuery, HTML, CSS, SQL, and SOAP APIs, integrating 5 different APIs to fetch data from multiple databases, reducing data retrieval time by 30%.",
        "Managed over 50 scheduled SQL batch jobs, 20 stored procedures (SPs), and 15 views, streamlining data processing and improving report generation efficiency by 40%.",
        "Implemented 10 Data Presenters using XSLT and XML, and created 12 insightful reports with SSRS, enhancing data visibility and decision-making processes.",
        "Deployed 8 web applications on IIS servers, ensuring 100% system uptime and enhancing security with regular patches and updates."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "NDMC",
      companylogo: require("./assets/images/NDMC_logo.png"),
      date: "Aug 2018 – Nov 2018",
      desc: "Contributed to web development projects, enhancing system functionalities and user experiences.",
      descBullets: [
        "Assisted in the development of web applications, working with HTML, CSS, and JavaScript.",
        "Collaborated with senior developers to optimize website performance and improve user interface designs.",
        "Conducted testing and debugging to ensure smooth functionality across different browsers and devices."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/SA_logo.png"),
      projectName: "Scott Asbestos",
      projectDesc: "Developed a professional business website for Scott Asbestos, featuring a clean design and user-friendly interface. Utilized HTML, CSS, and JavaScript to create a responsive and interactive site that enhances the company's online presence and provides valuable information to clients.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.scottasbestos.com/"
        }
      ]
    },
    {
      image: require("./assets/images/WSC_logo.jpg"),
      projectName: "WestSide Contracting",
      projectDesc: "Created a dynamic website for WestSide Contracting to showcase their services and projects. The site includes detailed service descriptions, a portfolio of completed projects, and contact information, all designed with a focus on accessibility and ease of use.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://westsidecontracting.ca/"
        }
      ]
    },
    {
      image: require("./assets/images/ucw_logo.jpg"),
      projectName: "PDF Master",
      projectDesc: "Engineered a Flask-based application, PDF Master, to automate the extraction and processing of data from course and textbook PDFs. This tool streamlined the management of educational resources, significantly reducing manual processing time and increasing data accuracy.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://samerth.pythonanywhere.com/"
        }
      ]
    },
    {
      image: require("./assets/images/CodSphere_logo.webp"),
      projectName: "CodSphere",
      projectDesc: "Designed and developed CodSphere, a web design and SEO agency based in Vancouver. The platform showcases the agency’s portfolio of web design and SEO projects, highlighting their expertise in creating visually appealing and search-optimized websites for a variety of clients.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://codsphere.ca/"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 604-906-2693",
  email_address: "spsamerthpathak@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
