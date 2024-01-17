/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Sai Kiran Reddy Kudumula",
  logo_name: "saikiran.k()",
  full_name: "Sai Kiran Reddy Kudumula",
  subTitle: "FullStack Developer, Always learning.",
  resumeLink:
    "https://s3.amazonaws.com/saikiran645assignment1.com/Portfolio_files/Sai_Kiran+Reddy+Kudumula_Resume.pdf",
  mail: "mailto:skudumul@gmu.edu",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/SaikiranReddyKudumula",
  linkedin: "https://www.linkedin.com/in/sai-kiran-reddy-kudumula-62ab54141/",
  gmail: "skudumul@gmu.edu",
  gitlab: "https://gitlab.com/harikanani",
};

const skills = {
  data: [
    {
      title: "Full Stack Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating applications backend in Node, Express & Flask",
        "⚡ Aws Serverless,AWS Cognito, S3, Ec2",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "George Mason University",
      subtitle: "Masters in Computer Science",
      logo_path: "gmu_univ.png",
      alt_name: "GMU",
      duration: "2023 - Present",
      cgpa: "4.0 / 4.0",
      descriptions: [
        "⚡I have secured 4.00 CGPA.",
        "Computer Systems and Systems Programming",
        "Mathematical Foundations of CS",
        "Analysis of Algorithms",
        "Software Model/Architech Design",
        "Component Based Software Development",
        "Database Systems",
        "User Interface Design/Development",
        "Software Engineering Real Time Embedded Systems",
      ],
      website_link: "https://www.gmu.edu/",
    },
    {
      title: "Vellore Institute of Technology",
      subtitle: "M.Tech Software Engineering (5 Year Integrated Programme)",
      logo_path: "vellore_univ.png",
      alt_name: "SSGC",
      duration: "2014 - 2019",
      cgpa: "8.0 / 8.0",
      descriptions: [
        "⚡I have secured 8.00 CGPA.",
        "Applied Discrete Mathematical Structures",
        "Applications of Differential and Difference Equations",
        "Database Management Systems",
        "Computer Architecture and Organization",
        "Theory of Computation",
        "Programming in Java",
        "Software Engineering",
        "Data Structures and Algorithms",
        "Computer Networks",
        "Software Testing",
        "Software Project Management",
        "Software Construction and Maintenance",
        "Information and System Security",
        "Software Design and Development Project",
      ],
      website_link:
        "https://vit.ac.in/schools/school-of-computer-science-engineering-and-information-systems-for-pg-courses",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Hackathon 2023",
      subtitle: "Patriot_Hacks",
      logo_path: "patriot_hacks.png",
      certificate_link: "https://devpost.com/software/connect-jgie9l",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Beginning as a Software Trainee, I quickly advanced through roles, mastering technologies from React and Firebase to AWS serverless solutions. My progression saw me optimizing applications, leading teams, and implementing cost-efficient infrastructures, consistently driving performance improvements and fostering collaboration in every role.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer (Freelancer)",
          company: "Swara",
          company_url: "https://swara.video/",
          logo_path:
            "https://hanaesolutions.com/wp-content/uploads/2022/12/download-1.png",
          duration: "Aug 2022 - October 2023",
          location: "Fairfax, VA",
          description: `At Swara OTT, I played a pivotal role in leveraging AWS technologies to craft a robust and cost-efficient serverless architecture. One of my notable achievements was the successful implementation of AWS Lambda functions, which led to a significant reduction in operational costs by 30%. Ensuring user security and ease of access, I established a rigorous user authentication and access control system using AWS Cognito. This not only fortified the platform's security but also provided a user-friendly authentication process for our users. Further enhancing our platform's capabilities, I made use of AWS Elemental MediaConvert and MediaTailor. This approach streamlined the video transcoding process into the HLS format. Moreover, it enabled seamless advertisement insertion, which greatly augmented content accessibility and opened new avenues for content monetization.`,
          color: "#0071C5",
        },
        {
          title: "Senior Software Engineer",
          company: "West Agile labs",
          company_url: "https://www.westagilelabs.com/",
          logo_path:
            "https://media.licdn.com/dms/image/C510BAQFQoyxcyMSp-Q/company-logo_200_200/0/1550655731099?e=1705536000&v=beta&t=JEZrGk-lPCFKyyXkY5htW0647WAv7U_p7YlaTO3kRcw",
          duration: "Oct 2020 - Dec 2022",
          location: "Hyderabad, Telangana",
          description: `During my tenure as a Senior Software Engineer at West Agile Labs in India from May 2021 to December 2022, I undertook a variety of pivotal roles that significantly enhanced our web solutions. I was responsible for the design, development, and rigorous testing of various web components using technologies such as HTML5, CSS, JavaScript, TypeScript, and React JS. This meticulous work resulted in a commendable 15% improvement in website load times and a 20% surge in user engagement. Furthermore, in my capacity as Squad Lead, I spearheaded a team of 10 members. My leadership involved overseeing sprint brainstorming sessions and ensuring efficient task breakdown and distribution among developers. One of my key contributions was fostering robust collaboration between the development and product teams, guaranteeing streamlined coordination. On the backend, I developed and optimized RESTful APIs and services that seamlessly integrated with our MongoDB data storage layer, which led to a notable 40% reduction in response time. The server-side logic was primarily built using NodeJS and the Express framework, enhanced with middle-wares to adeptly manage HTTP requests. I also engineered AWS Lambda functions tailored to handle intricate business rules associated with debit card transactions, ensuring we remained compliant with regulatory standards. To maintain the highest quality of our solutions, I proficiently utilized testing tools like Jest, Enzyme, Mocha, and Chai to comprehensively test both our React components and backend APIs.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },

        {
          title: "Software Development Engineer",
          company: "Devathon",
          company_url: "https://devathon.com/",
          logo_path:
            "https://devathon.com/wp-content/uploads/2019/05/003-technology.png",
          duration: "Jun 2019 - May 2021",
          location: "Hyderabad, Telangana",
          description: `During my role as a Software Development Engineer at Devathon in India, I was deeply involved in cross-platform mobile development using React Native. I proudly spearheaded the release of apps on both the AppStore and PlayStore. One of my significant accomplishments was the enhancement of the React Native in-store POS application. Through meticulous refactoring of class components, elimination of redundant code, and optimization of dependencies, I achieved a 30% reduction in loading times, boosted the overall responsiveness by 20%, reduced the app size by 25%, and ensured 15% faster rendering.`,
          color: "#ee3c26",
        },
        {
          title: "Software Trainee",
          company: "Devathon",
          company_url: "https://devathon.com/",
          logo_path:
            "https://devathon.com/wp-content/uploads/2019/05/003-technology.png",
          duration: "Jun 2018 - Jun 2019",
          location: "Hyderabad, Telangana",
          description: `During my tenure as a Software Trainee at Devathon in India from June 2018 to June 2019, I was deeply involved in front-end development and mobile application creation. I took the lead in building a responsive user interface for customer-facing web pages, harnessing the power of Bootstrap and ReactJs. My role also encompassed the implementation of pivotal features such as real-time messaging, push notifications, and robust user authentication, all of which I achieved using Firebase. To ensure the integrity of our source code and maintain seamless collaboration, I adeptly used Git for version control. Concurrently, I was responsible for overseeing the builds and meticulously documenting our processes in Confluence. Venturing into mobile development, I utilized Xcode for iOS-centric tasks, ensuring our applications were not only compatible with Apple devices but also adhered to the stringent iOS design guidelines. In parallel, for our Android development needs, I employed Android Studio, with a keen focus on performance optimization and enhancing the platform-specific user interface.`,
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Community Lead",
    //       company: "Bauddhik-Geeks",
    //       company_url: "https://bauddhikgeeks.tech/",
    //       logo_path: "bauddhikgeeks.png",
    //       duration: "Sep 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Help Tech-Geeks so they get exposure to the technical world and enlighten their skills. Hence, the programming club highlight all the skills of the individual members and help them develop and groom their skills in a meaningful way. Help community members to learn and grow.",
    //       color: "#FBBD18",
    //     },
    //     {
    //       title: "Cross Winter of Code Mentor",
    //       company: "CWOC",
    //       company_url: "https://crosswoc.ieeedtu.in/",
    //       logo_path: "cwoc.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //     // {
    //     //   title: "Campus Hustler",
    //     //   company: "Skillenza",
    //     //   company_url: "https://skillenza.com/",
    //     //   logo_path: "skillenza.png",
    //     //   duration: "Feb 2021 - Present",
    //     //   location: "Work from Home",
    //     //   description:
    //     //     "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
    //     //   color: "#196acf",
    //     // },
    //     {
    //       title: "GDG Student Volunteer",
    //       company: "Google Developer Groups",
    //       company_url: "https://gdg.community.dev/",
    //       logo_path: "gdg.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Google Developer Group Surat Student Volunteer and Member.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Postman Student Expert",
    //       company: "Postman",
    //       company_url: "https://www.postman.com/",
    //       logo_path: "postman.png",
    //       duration: "Feb 2020 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Google Developer Group Surat Student Volunteer and Member.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "GitHub Student Developer",
    //       company: "GitHub",
    //       company_url: "https://github.com/",
    //       logo_path: "github.png",
    //       duration: "Nov 2019 - Present",
    //       location: "Work from Home",
    //       description:
    //         "Contribute to Open Source Community and Open Source Project.",
    //       color: "#040f26",
    //     },
    //     {
    //       title: "Google Local Guide",
    //       company: "Google Map",
    //       company_url: "https://maps.google.com/localguides/",
    //       logo_path: "localguide.png",
    //       duration: "Sep 2018 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "E. F. I. Student Volunteer",
    //       company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
    //       company_url: "https://indiaenvironment.org/",
    //       logo_path: "efi.png",
    //       duration: "Apr 2017 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
    //       color: "#5a900f",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path:
      "https://s3.amazonaws.com/saikiran645assignment1.com/Portfolio_files/IMG_2204%2B3+(1).png",
    description: "You can contact me at the places mentioned below",
  },
  blogSection: {},
};

const projects = {
  data: [
    {
      id: "0",
      name: "Vehicle Rental Booking App",
      url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
      description:
        "As the lead developer for this project, I conceptualized and implemented a robust micro-mobility solution tailored for large university campuses and IT parks. The application, named Autorent, facilitates short-term electric scooter and bike rentals, promoting eco-friendly commuting within the campus.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "React",
          iconifyClass: "skill-icons:react-dark",
        },
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Live Demo",
          url:
            "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "Connect",
      url: "https://github.com/kevalvavaliya/Yog4Life",
      description:
        "Students no longer have to stress about taking notes during lectures. If they miss a class, they can easily catch up with a summary of what was covered. These concise points will help students recall class content efficiently. Additionally, we've incorporated shuttle service details, so staying updated on shuttle times is a breeze. Want to find out which dining hall is serving your favorite dish? Now you can. Plus, the most popular items are prominently displayed for easy selection.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Devpost",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "2",
      name: "Swara OTT",
      url: "https://github.com/kevalvavaliya/Adoptisity",
      description:
        "I led the development of a versatile OTT application enabling users to effortlessly access and enjoy podcasts, PDFs, and videos within a unified platform. Additionally, I played a key role in crafting an efficient admin app, empowering content administrators to seamlessly upload, manage, and curate diverse content types for the OTT platform.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "AWS",
          iconifyClass: "logos:aws",
        },
      ],
      links: [
        {
          name: "Live Demo",
          url: "https://swara.video/",
          iconifyClass: "mdi:web",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
