export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

// export const clientReviews = [
//   {
//     id: 1,
//     name: 'Nayan Vyas',
//     position: 'Marketing Director at GreenLeaf',
//     img: 'assets/review1.png',
//     review:
//       'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//   },
//   {
//     id: 2,
//     name: 'Mark Rogers',
//     position: 'Founder of TechGear Shop',
//     img: 'assets/review2.png',
//     review:
//       'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//   },
//   {
//     id: 3,
//     name: 'John Dohsas',
//     position: 'Project Manager at UrbanTech ',
//     img: 'assets/review3.png',
//     review:
//       'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//   },
//   {
//     id: 4,
//     name: 'Ether Smith',
//     position: 'CEO of BrightStar Enterprises',
//     img: 'assets/review4.png',
//     review:
//       'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//   },
// ];

export const myProjects = [
  {
    title: 'DreamDown - Smart Space-Saving Bed',
    desc: 'DreamDown is an innovative smart furniture solution designed to revolutionize space management. By integrating advanced automation, this bed can seamlessly fold and unfold with minimal user input, optimizing space usage in modern living environments. ',
    subdesc:'Powered by Raspberry Pi, Python, and sensor technology, DreamDown combines convenience and functionality, paving the way for smarter living spaces with cutting-edge automation.',
    href: 'https://drive.google.com/file/d/1hWkjGh_xErRpqDSG_t8XQOD4aGppkMwS/view?usp=drive_link',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Raspberry-pi',
        path: '/assets/raspberry.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: 'assets/python.svg',
      },
      // {
      //   id: 3,
      //   name: 'TypeScript',
      //   path: '/assets/typescript.png',
      // },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },
  {
    title: 'UI Design Redesign of PNWX.com',
    desc: 'The UI Design Redesign of PNWX.com project involved a comprehensive overhaul of the user interface using React.js, aimed at significantly enhancing user experience and accessibility. This redesign focuses on creating an intuitive and engaging platform that caters to the needs of its users.',
    subdesc:'With a keen emphasis on usability, the new design incorporates modern UI principles, ensuring that navigation is seamless and content is easily accessible. The use of React.js allows for dynamic rendering and responsiveness, providing users with a fluid experience across all devices.',
    href: 'https://drive.google.com/file/d/13rBhe8VOHuLVvLH9JusFGsbHekmHskcn/view?usp=sharing',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Mysql',
        path: 'assets/mysql.svg',
      },
      // {
      //   id: 3,
      //   name: 'TypeScript',
      //   path: '/assets/typescript.png',
      // },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },
  {
    title: 'KRASHIDHARA: Agriculture Vehicles and Seed Booking Mobile Application',
    desc: 'KRASHIDHARA is a cutting-edge mobile application developed using Flutter, designed specifically to assist farmers in booking agricultural vehicles and purchasing seeds. This application addresses the challenges faced by farmers by providing a user-friendly platform that streamlines the process of acquiring essential resources for their farming needs.',
    subdesc:'The application leverages a robust technology stack, including Firebase for real-time data management, APIs for seamless integration with external services, and MySQL for reliable data storage. By utilizing GitHub for version control, the development process is streamlined, allowing for effective collaboration among team members.',
    href: 'https://drive.google.com/file/d/1WPw2GYO-hPbpdMBm9BNxYOAyIKyuEg2Z/view?usp=drive_link',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: '/assets/flutter.svg',
      },
      {
        id: 2,
        name: 'firebase',
        path: 'assets/firebase.svg',
      },
      {
        id: 3,
        name: 'mysql',
        path: '/assets/mysql.svg',
      },
      {
        id: 4,
        name: 'python',
        path: '/assets/python.svg',
      },
    ],
  },
  {
    title: 'University Management System (2024)',
    desc: 'The University Management System is a comprehensive desktop application developed using Flutter, designed to streamline and enhance the management of university operations. This application facilitates essential functions such as student enrollment, faculty management, and course scheduling, providing a centralized platform for administrators and staff to efficiently oversee university activities.',
    subdesc:'By leveraging the capabilities of Firebase, the application ensures real-time data synchronization and secure user authentication. This integration allows for seamless management of student records, faculty information, and course details, enabling users to access up-to-date information at any time.',
    href: 'https://drive.google.com/file/d/1-WCEFqMvrlIaBnYVWeSg3eeiWMySv2eN/view?usp=sharing',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: '/assets/flutter.svg',
      },
      {
        id: 2,
        name: 'firebase',
        path: 'assets/firebase.svg',
      },
      // {
      //   id: 3,
      //   name: 'TypeScript',
      //   path: '/assets/typescript.png',
      // },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },
  {
    title: 'UpajUtsav (2024)',
    desc: 'UpajUtsav is an innovative mobile application developed with Flutter and Firebase, designed to enhance agricultural trade by directly connecting farmers with national and international buyers. This platform significantly improves market accessibility, allowing farmers to sell their products more efficiently while fostering a transparent trading environment.',
    subdesc:'The application utilizes Firebase for real-time data management, ensuring users receive instant updates on market trends and transactions. With integrated APIs, UpajUtsav facilitates seamless communication between farmers and buyers, enhancing the overall user experience. Additionally, MySQL is employed for backend data management, while JSON is used for efficient data interchange. The project is managed through GitHub, streamlining collaboration among developers to continuously improve the application.Share Rewrite',
    href: 'https://drive.google.com/file/d/1mO0c_9BnnFV2Qd5GslAttQ1VFwfgdS10/view?usp=sharing',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: '/assets/flutter.svg',
      },
      {
        id: 2,
        name: 'firebase',
        path: 'assets/firebase.svg',
      },
      {
        id: 3,
        name: 'mysql',
        path: '/assets/mysql.svg',
      },
      // {
      //   id: 4,
      //   name: 'pytho',
      //   path: '/assets/framer.png',
      // },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'BigInIT Technologies LLP',
    pos: 'Developer',
    duration: 'Aug 2024 - Present',
    title: "As a developer at BigInit, I have integrated secure payment gateways to streamline online transactions, significantly enhancing user convenience. My role involves deploying and hosting web applications on cloud platforms, where I manage version control and collaboration using GitHub.",
    icon: '/assets/BigInIT.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'ERFINDERN TECHNOLOGIES PVT. LTD. ',
    pos: 'Application Developer',
    duration: 'April 2024 - july 2024',
    title: "In my role at Erfinder Technologies, I developed a mobile application using Flutter and Dart, integrating Firebase for real-time data synchronization, which significantly improved user experience. I collaborated on implementing RESTful APIs to ensure seamless communication between the app and server, enhancing overall app functionality.",
    icon: '/assets/company1.jpg',
    animation: 'clapping',
  },
  // {
  //   id: 3,
  //   name: 'Notion',
  //   pos: 'Junior Web Developer',
  //   duration: '2019 - 2020',
  //   title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: '/assets/notion.svg',
  //   animation: 'salute',
  // },
];
