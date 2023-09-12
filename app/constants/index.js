export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: "introIcons/coding.gif",
  },
  {
    title: "Full-Stack Engineer",
    icon: "introIcons/computer.gif",
  },
  {
    title: "Cloud Developer",
    icon: "introIcons/network.gif",
  },
  {
    title: "Problem Solver",
    icon: "introIcons/idea.gif",
  },
];

const technologies = [
  {
    name: "Java",
    icon: "tech/java.png",
  },
  {
    name: "C#",
    icon: "tech/c-sharp.png",
  },
  {
    name: "Python",
    icon: "tech/python.png",
  },
  {
    name: "Scala",
    icon: "tech/scala.png",
  },
  {
    name: "MongoDB",
    icon: "tech/mongodb.png",
  },
  {
    name: "JavaScript",
    icon: "tech/javascript.png",
  },
  {
    name: "React JS",
    icon: "tech/reactjs.png",
  },
  {
    name: "Tailwind CSS",
    icon: "tech/tailwind.png",
  },
  {
    name: "Three JS",
    icon: "tech/threejs.svg",
  },
  {
    name: "git",
    icon: "tech/git.png",
  },
  {
    name: "docker",
    icon: "tech/docker.png",
  },
];

const certifications = [
  {
    title: "Azure Virtual Desktop Specialty",
    icon: "/certificationImages/az_140.png",
    link: "https://www.credly.com/badges/5e4876e4-1eb3-4022-8b50-59677c77ffef/public_url",
  },
  {
    title: "Azure AI Engineer Associate",
    icon: "/certificationImages/ai_102.svg",
    link: "https://learn.microsoft.com/en-us/users/jakubchamera/credentials/796ca0b5859adbc4",
  },
  {
    title: "Azure Fundamentals",
    icon: "/certificationImages/az_900.png",
    link: "https://www.credly.com/badges/ef973cd6-81c2-4ae8-af1e-a2e736b34a24/public_url",
  },
  {
    title: "Azure AI Fundamentals",
    icon: "/certificationImages/ai_900.png",
    link: "https://www.credly.com/badges/23331e4a-02ca-4d8f-b5a1-e54e865dcdc7/public_url",
  },
  {
    title: "Azure Data Fundamentals",
    icon: "/certificationImages/dp_900.png",
    link: "https://www.credly.com/badges/c94e3785-a0c4-4ffd-b6f8-136ecc614379/public_url",
  },
  {
    title: "Azure Security Fundamentals",
    icon: "/certificationImages/sc_900.png",
    link: "https://www.credly.com/badges/48f3503b-3625-4b7d-9466-49ecd8f65afd/public_url",
  },
  {
    title: "AWS Cloud Practitioner",
    icon: "/certificationImages/aws_ccp.png",
    link: "https://www.credly.com/badges/18577e90-0fc4-438d-9e73-8e0d50928c9f/public_url",
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

const finishedProjects = [
  {
    name: "Power of AI",
    description:
      "An AI powered program which takes an image as input, analyses the image, and returns output information in several categories. The program is able to generate a description of the image, scan for, recognise, and tag objects, analyse colour, scan for and recognise faces, the age, and gender of the face, recognise celebrities, landmarks, and brands. The program can also use AI to moderate content for three categories: Adult, Gory, and Racy.",
    tags: [
      {
        name: "csharp",
        color: "pink-text-gradient",
      },
      {
        name: "azure",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
    ],
    image: "../projectImages/power_of_ai.jpg",
    source_code_link: "https://github.com/Jakub-C-7/PowerOfAI",
  },
  {
    name: "UNIty Social Platform",
    description:
      "Platform aimed at improving the experience of an academic journey through provisioning ease in peer-to-peer interaction. The secure web-application utilises modern development tools such as Java (Spring Boot) for full-stack development.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "springBoot",
        color: "green-text-gradient",
      },
      {
        name: "mySQL",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: "../projectImages/unity.jpg",
    source_code_link: "https://github.com/Jakub-C-7/UNItySocialPlatform",
  },
  {
    name: "Telemetry Web App",
    description:
      "Secure web-application for sending, receiving, viewing, and managing telemetry data. Users can register, log-in, and with the use of EE M2M, send, view, and download messages from the server.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "twig",
        color: "green-text-gradient",
      },
      {
        name: "restapi ",
        color: "orange-text-gradient",
      },
      {
        name: "devsecops ",
        color: "blue-text-gradient",
      },
    ],
    image: "../projectImages/telemetry.jpg",
    source_code_link: "https://github.com/Jakub-C-7/Telemetry-Data-Processing",
  },
  {
    name: "This Website (Portfolio Version 2)",
    description:
      "A portfolio website written with cutting-edge technologies aimed to showcase the versatility of my abilities and capability of rapidly adapting to new concepts. This one was a load of fun!",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: "../projectImages/portfoliov2.jpg",
    source_code_link: "https://github.com/Jakub-C-7/portfolioV2",
  },
  {
    name: "Portfolio Version 1",
    description:
      "The first iteration of my portfolio website is a project which demonstrated my ability to deliver clean, robust, and reusable code. Written completely from scratch with just the use of vanilla JavaScript, HTML5, and CSS3 and demonstrating modern concepts in those languages respectively.",
    tags: [
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: "../projectImages/portfoliov1.gif",
    source_code_link: "https://github.com/Jakub-C-7/portfolioV1",
  },
];

export {
  services,
  technologies,
  testimonials,
  finishedProjects,
  certifications,
};
