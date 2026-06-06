export const portfolioData = {
  personalInfo: {
    name: "Satyam Kumar Sah",
    role: "Computer Science Engineering Student & Full Stack Developer",
    location: "Bihar, India",
    bio: "Passionate Full Stack Developer and Computer Science student focused on building modern, scalable, and user-friendly web applications.",
    email: "satyamkumarsah7631@gmail.com",
    phone: "+91 7631410643",
    github: "https://github.com/satyamkrsah",
    linkedin: "https://www.linkedin.com/in/satyam-kumar-sah-50b54032b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    resumeUrl: "#", // Placeholder for download
  },
  stats: [
    { label: "Projects Completed", value: 12, suffix: "+" },
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
        { name: "MySQL", percentage: 50 },
      ]
    },
    {
      category: "Programming & Tools",
      items: [
        { name: "Python", percentage: 60 },
        { name: "Java", percentage: 65 },
        { name: "Git & GitHub", percentage: 85 },
        { name: "VS Code", percentage: 99 },
      ]
    }
  ],
  projects: [
    {
      id: 1,
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
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/assets/portfolio.png",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Academic Engineering Projects",
      shortDescription: "A collection of software engineering and core computer science projects.",
      description: "A collection of software engineering and core computer science projects developed during Bachelor of Engineering coursework, focusing on algorithms, system design, and database management.",
      fullDetails: "This project collection includes various academic projects covering Software Engineering principles, Database Management Systems, Operating Systems concepts, and algorithms implementation.",
      features: [
        "Algorithm implementations",
        "Database design & optimization",
        "OS concepts implementation",
        "System design patterns",
        "Code documentation",
        "Test suites"
      ],
      challenge: "Understanding and implementing complex computer science concepts while applying software engineering best practices.",
      solution: "Focused on clean code principles, proper documentation, and comprehensive testing. Used design patterns and architectural principles.",
      tech: ["Python", "Java", "SQL", "Git", "Software Engineering", "DBMS", "Operating Systems"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/assets/academic.png",
      category: "Academic"
    }
  ],
  education: {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    institution: "Computer Science Engineering Institution",
    period: "2023 - Present",
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
  services: [
    {
      title: "Full Stack Web Development",
      description: "End-to-end development of modern web applications. From secure database configurations to interactive client-side logic."
    },
    {
      title: "Frontend Development",
      description: "Crafting highly aesthetic, responsive, accessible, and fast web pages utilizing modern React architectures and CSS."
    },
    {
      title: "Backend Development",
      description: "Designing structured RESTful APIs, securing API endpoints, managing database relationships, and server-side optimization."
    },
    {
      title: "Responsive Website Design",
      description: "Ensuring visual fidelity, performance metrics, and responsive adapts across mobile, tablet, and desktop monitors."
    },
    {
      title: "UI/UX Implementation",
      description: "Converting design mockups into living frontends, embedding smooth transitions, micro-interactions, and visual feedback."
    }
  ]
};
