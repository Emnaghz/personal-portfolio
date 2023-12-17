import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    postgresql,
    git,
    odoo,
    docker,
    jenkins,
    hexastack,
    slnee,
    threejs,
    isi,
    lpbt,
    ansible,
    aws,
    python,
    swagger,
    githubactions,
    linux,
    cloudpractitioner,
    AWSknowledge,
    dockercertif,
    pythonEssentials,
    jscertif,
    linuxcertif,
    ansiblecertif,
    tcpc,
    sonarqube,
    portfolio,
    gym,
    azure
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "achievements",
      title: "Achievements",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Development",
      icon: web,
    },
    {
      title: "DevOps Enthusiast",
      icon: mobile,
    },
    {
      title: "Cloud Enthusiast",
      icon: backend,
    },
    // {
    //   title: "Web Development",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "python",
      icon: python,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    // {
    //   name: "swagger",
    //   icon: swagger,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "odoo",
    //   icon: odoo,
    // },
    {
      name: "githubactions",
      icon: githubactions,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "ansible",
      icon: ansible,
    },
    {
      name: "jenkins",
      icon: jenkins,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "linux",
      icon: linux,
    },
  ];
  
  const experiences = [
    {
      title: "Summer Internship",
      company_name: "Hexastack",
      icon: hexastack,
      iconBg: "#383E56",
      date: " Jul 2022 - Aug 2022",
      points: [
        "Developing and maintaining data visualization generator web application interface using React.js and Typescript and other related technologies.",
        "Collaborating with cross-functional teams including product managers and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "End-Of-Study Internship",
      company_name: "SLNEE",
      icon: slnee,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Jun 2023",
      points: [
        "Developed an integrated delivery management module within the Odoo ERP, addressing the essential need for streamlined delivery processes.",
        "Ensured seamless integration with Odoo's existing architecture, providing a consistent user experience.",
        "Incorporating ChartJS for clear and intuitive graphical data representation.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  const educations = [
    {
      title: `Software Development Engineering Degree`,
      company_name: "Higher Institute of Computer Science.",
      icon: isi,
      iconBg: "#E6DEDD",
      date: " Sep 2023 - Present",
    },
    {
      title: `Bachelor's Degree in Computer Science(
        with Honors)`,
      company_name: "Higher Institute of Computer Science.",
      icon: isi,
      iconBg: "#E6DEDD",
      date: " Sep 2020 - June 2023",
    },
    {
      title: `Mathematics baccalaureate (Honours
        degree)`,
      company_name: "Bourguiba Pioneer High School",
      icon: lpbt,
      iconBg: "#E6DEDD",
      date: "Sep 2016 - Jun 2020",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "BUild portfolio website that combines 3D animation using three.js, React for a dynamic interface, and Tailwind for responsive design. Plus, implemented GitHub Actions for automated deployment to GitHub Pages. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "GitHubActions",
          color: "orange-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Emnaghz/personal-portfolio",
    },
    {
      name: "ChatGPT chatbot CI/CD pipeline",
      description:
        "Setting up a Jenkins CI/CD pipeline with SonarQube and Slack integration for a React-based chatbot that leverages the ChatGPT API.",
      tags: [
        {
          name: "jenkins",
          color: "blue-text-gradient",
        },
        {
          name: "docker",
          color: "green-text-gradient",
        },
        {
          name: "slack",
          color: "pink-text-gradient",
        },
      ],
      image: sonarqube,
      source_code_link: "https://github.com/Emnaghz/Chatbot-Pipeline",
    },
    {
      name: "Gym website",
      description:
        "A comprehensive gym website that allows users to register, see activities and plans. Implemented admin Interface for managing registrated accounts and the gym website settings.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "yellow",
        },
        {
          name: "MySql",
          color: "orange-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/Emnaghz/GymWebsite",
    },
  ];


  const certifications = [
    {
      name: "AWS Cloud Practitioner Certificate",
      image: cloudpractitioner,
      source_link: "https://www.credly.com/badges/f40e1302-940a-459f-b0d5-44921bb180ad/linked_in_profile",
    },
    {
      name: "AWS Knowledge: Cloud Essentials Certificate",
      image: AWSknowledge,
      source_link: "https://www.credly.com/badges/f5c0dc09-1a79-4f09-a6bd-3340c03ca986/linked_in_profile",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      image: azure,
      source_link: "https://www.credly.com/earner/earned/badge/80f83890-5898-48ef-a1a1-4509c6b0fd42",
    },
    {
      name: "Python Essentials Certificate",
      image: pythonEssentials,
      source_link: "https://www.credly.com/badges/5ad52596-7293-4d8d-8c4d-dc759d099bc4?source=linked_in_profile",
    },
    {
      name: "Docker Certificate",
      image: dockercertif,
      source_link: "https://kodekloud.com/certificate-verification/2D08B6E6776A-2D08B0EFAC0E-2D08AB561C42/",
    },
    {
      name: "Ansible Basics Certificate",
      image: ansiblecertif,
      source_link: "https://kodekloud.com/certificate-verification/2D08B6E6776A-2D08B0E15235-2D08AB561C42/",
    },
    {
      name: "JavaScript Algorithms and Data Structures Certificate",
      image: jscertif,
      source_link: "https://www.freecodecamp.org/certification/Emna_Ghzayel/javascript-algorithms-and-data-structures",
    },
    {
      name: "Linux for Developers Certificate",
      image: linuxcertif,
      source_link: "https://www.coursera.org/account/accomplishments/verify/SVL2SGKL4WGT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
    },
    {
      name: "TCPC Certificate",
      image: tcpc,
      source_link: "https://drive.google.com/file/d/1Cs01IKMuH2Zh5Asl1wtzb5VGUmqNjAM4/view",
    },
  ];
  
  export { services, technologies, experiences, educations, testimonials, certifications, projects };