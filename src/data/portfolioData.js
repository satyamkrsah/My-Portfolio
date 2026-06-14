import Cityweather from "../assets/cityweather.png";
import portfolio from "../assets/portfolio.png";


export const portfolioData = {
  personalInfo: {
    name: "Satyam Kumar Sah",
    role: "Computer Science Engineering Student & Full Stack Developer",
    location: "Bihar, India",
    bio: "Passionate about building modern, scalable, and user-friendly digital experiences. Constantly exploring new technologies and turning ideas into impactful solutions.",
    email: "satyamkumarsah7631@gmail.com",
    phone: "+91 7631410643",
    github: "https://github.com/satyamkrsah",
    linkedin: "https://www.linkedin.com/in/satyam-kumar-sah-50b54032b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    resumeUrl: "https://drive.google.com/file/d/1FKSfE2roPt11lhuOnLEJz97c4gNkBcg8/view?usp=drive_link", // Placeholder for download
  },
  stats: [
    { label: "Projects Completed", value: 9, suffix: "+" },
    { label: "Technologies Learned", value: 15, suffix: "+" },
    { label: "Years of Coding", value: 2, suffix: "+" },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", percentage: 95 },
        { name: "CSS3", percentage: 90 },
        { name: "JavaScript", percentage: 75 },
        { name: "React.js", percentage: 65 },
        { name: "Tailwind CSS", percentage: 70 },
      ]
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js", percentage: 60 },
        { name: "Express.js", percentage: 75 },
        { name: "MongoDB", percentage: 95 },
        { name: "MySQL", percentage: 40 },
      ]
    },
    {
      category: "Programming & Tools",
      items: [
        { name: "C++", percentage: 60 },
        { name: "Java", percentage: 65 },
        { name: "Git & GitHub", percentage: 85 },
        { name: "VS Code", percentage: 99 },
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Cityweather",
      shortDescription: "A responsive weather application that provides real-time weather updates for cities worldwide.",
      description: "CityWeather is a modern weather forecasting web application that allows users to search for any city and view current weather conditions, temperature, humidity, wind speed, and other essential weather details using live weather APIs.",
      fullDetails: "The application integrates with a weather API to fetch real-time weather data and presents it through a clean, responsive, and user-friendly interface. Users can search for cities globally and get accurate weather information instantly.",
      features: [
        "Real-time weather updates",
    "City-based weather search",
    "Temperature, humidity & wind details",
    "Responsive design for all devices",
    "Fast API integration",
    "Clean and intuitive UI"
      ],
      challenge: "Fetching and displaying accurate real-time weather data while maintaining a fast and responsive user experience.",
      solution: "Integrated a weather API with efficient error handling, optimized API requests, and built a responsive frontend using modern web development practices.",
      tech: ["React","JavaScript","HTML5","CSS3","Vite","Weather API","GitHub"],
      githubUrl: "https://github.com/satyamkrsah/Cityweather",
      liveUrl: "https://cityweather-rho.vercel.app/",
      image: Cityweather,
      category: "Full stack"
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      shortDescription: "A modern, highly responsive developer portfolio with advanced animations.",
      description: "A modern, highly responsive developer portfolio website featuring advanced UI/UX animations, dark/light theme support, and premium glassmorphism design patterns.",
      fullDetails: "This portfolio website showcases a collection of my projects and skills with a focus on modern design principles and smooth user interactions. Built with React and Tailwind CSS, it features smooth animations, dark mode support, and is fully responsive across all devices.",
      features: [
        "Smooth scroll animations",
        "Dark/Light theme toggle",
        "Glassmorphism design",
        "Responsive layout",
        "Project showcase",
        "Contact form integration"
      ],
      challenge: "Creating a visually appealing design while maintaining excellent performance and accessibility standards.",
      solution: "Used Framer Motion for animations with proper performance optimization. Implemented lazy loading for images and used Tailwind CSS for efficient styling.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "React Router", "React Icons"],
      githubUrl: "https://github.com/satyamkrsah/My-Portfolio",
      liveUrl: "https://satyamkrsah.vercel.app/",
      image: portfolio,
      category: "Frontend"
    },
    {
      id: 3,
      title: "FindMyDoctor",
      shortDescription: "A doctor search and appointment booking platform featuring comprehensive doctor profiles.",
      description: "A full-stack doctor search and appointment booking platform designed to connect patients with healthcare professionals. The platform features comprehensive doctor profiles with specializations, clinic filtering, advanced search functionality, and real-time appointment booking management.",
      fullDetails: "FindMyDoctor is a comprehensive healthcare booking platform built with modern web technologies. It allows users to search for doctors by specialization, location, and availability. The platform includes real-time appointment scheduling, patient reviews, clinic management, and secure payment integration.",
      features: [
        "Advanced doctor search and filtering",
        "Real-time appointment booking",
        "Doctor profiles with ratings & reviews",
        "Clinic management system",
        "Payment gateway integration",
        "Email notifications"
      ],
      challenge: "The main challenge was handling real-time data synchronization for appointment slots across multiple clinics and ensuring secure patient data handling.",
      solution: "Implemented WebSockets for real-time updates and MongoDB transactions for data consistency. Used bcrypt for password hashing and JWT for authentication.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express", "REST API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/assets/findmydoctor.png",
      category: "Full Stack"
    }
  ],
  education: {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    institution: "Computer Science Engineering Institution",
    period: "2024-2028 (Expected)",
    description: "Focusing on core computer science foundations, engineering principles, and practical software design paradigms.",
    subjects: [
      "Software Engineering",
      "Data Structures",
      "DBMS",
      "Operating Systems",
      "Computer Organization & Architecture",
      "Machine Learning Fundamentals"
    ]
  },
  achievements: [
    {
      title: "Full Stack Development Projects",
      description: "Successfully designed and deployed multiple full-stack applications with modular frontend and secure REST APIs."
    },
    {
      title: "Strong Software Engineering Knowledge",
      description: "Solid grasp of computer science fundamentals including OOP, DBMS, OS, DSA, and agile development methodologies."
    },
    {
      title: "Frontend & Backend Experience",
      description: "Proficient in bridging the gap between database systems and interactive user experiences with premium styling."
    },
    {
      title: "Continuous Learning Mindset",
      description: "Consistently expanding skill set with modern libraries, cloud services, and framework optimizations."
    }
  ],
  // services: [
  //   {
  //     title: "Full Stack Web Development",
  //     description: "End-to-end development of modern web applications. From secure database configurations to interactive client-side logic."
  //   },
  //   {
  //     title: "Frontend Development",
  //     description: "Crafting highly aesthetic, responsive, accessible, and fast web pages utilizing modern React architectures and CSS."
  //   },
  //   {
  //     title: "Backend Development",
  //     description: "Designing structured RESTful APIs, securing API endpoints, managing database relationships, and server-side optimization."
  //   },
  //   {
  //     title: "Responsive Website Design",
  //     description: "Ensuring visual fidelity, performance metrics, and responsive adapts across mobile, tablet, and desktop monitors."
  //   },
  //   {
  //     title: "UI/UX Implementation",
  //     description: "Converting design mockups into living frontends, embedding smooth transitions, micro-interactions, and visual feedback."
  //   }
  // ]
};
