import {
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  docker,
  mysql,
  angularjs,
  nestjs,
  express,
  jenkins,
  spring,
  devops,
  micro,
} from "../assets";

export const navLinks = [

  {
    id: "hero",
    title: "profile",
  },
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


const technologies = [

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "angular",
    icon: angularjs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
 
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
 
];

const experiences = [
  {
    title: "Devops Project",
    company_name: "Spring/Angular",
    icon: devops,
    iconBg: "#000",
    date: "February 2024 - April 2024",
    points: [
      "Jenkins: Orchestrates automated builds, tests, and deployments for rapid software delivery.",
      "DockerHub: Central repository for Docker images, enabling seamless deployment across environments.",
      "Nexus: Secure repository manager for efficient storage of artifacts, fostering collaboration and reducing duplication.",
      "SonarQube: Analyzes code for bugs, vulnerabilities, and code smells, promoting cleaner, maintainable code.",
      "Prometheus: Gathers metrics for monitoring system health and performance.",
      "Grafana: Provides customizable dashboards and graphs for real-time monitoring and trend analysis.",
    ],
  },
  {
    title: "Microservices Project",
    company_name: "Express.js/Spring/Angular",
    icon: micro,
    iconBg: "#E6DEDD",
    date: "December 2023 - February 2024",
    points: [
      "Eureka Discovery Server: Acts as the service registry and discovery mechanism, allowing microservices to locate and communicate with each other dynamically.",
      "Spring Cloud Gateway: Serves as the API gateway, providing a single entry point for clients to access various microservices. It offers routing, filtering, and load balancing functionalities to optimize traffic flow.",
      "Keycloak: Handles authentication and authorization for microservices, ensuring secure access control. With support for OpenID Connect and OAuth 2.0, Keycloak enables seamless integration and centralized user management.",
      "Docker Compose: Streamlines the deployment and management of microservices by defining them as isolated, containerized units. Docker Compose simplifies the setup of the entire development environment, fostering consistency and reproducibility.",
    ],
  },
  {
    title: "NestJS Project",
    company_name: "Project Management Platform",
    icon: nestjs,
    iconBg: "#fff",
    date: "October 2023 - november 2023",
    points: [
      "This project aims to streamline project management processes by providing a comprehensive platform.",
      " Built on the NestJS framework for the backend and React for the frontend, this platform offers a user-friendly interface and powerful features to enhance collaboration, organization, and productivity for teams of all sizes.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "ExpressJS Project",
    company_name: "E-commerce Platform for Parapharmacy",
    icon: express,
    iconBg: "#828282",
    date: "Jun 2023 - August  2023",
    points: [
      "e-commerce project specializes in offering a comprehensive online platform tailored specifically for parapharmacie products. ",
      "Leveraging the power of ExpressJS, this platform provides a seamless shopping experience for customers seeking a wide range of health, wellness, and beauty products.",
      "With an intuitive interface built with ReactJS, our platform delivers a seamless shopping experience, providing easy navigation and smooth interactions for users.",
    ],
  },
];



export {  technologies, experiences };
