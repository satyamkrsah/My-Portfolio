import Cityweather from "../assets/cityweather.png";
import portfolio from "../assets/portfolio.png";
import spp from "../assets/spp.png";
import rainroute from "../assets/rainroute-ai.png";

export const portfolioData = {
  personalInfo: {
    name: "Satyam Kumar Sah",
    role: "Computer Science Engineering Student & Full Stack Developer",
    location: "Bihar, India",
    bio: "Passionate about building modern, scalable, and user-friendly digital experiences. Constantly exploring new technologies and turning ideas into impactful solutions.",
    email: "satyamkumarsah7631@gmail.com",
    phone: "+91 7631410643",
    github: "https://github.com/satyamkrsah",
    linkedin:
      "https://www.linkedin.com/in/satyam-kumar-sah-50b54032b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    resumeUrl:
      "https://drive.google.com/file/d/17H9RGmAj3Qaf4bIlZtyfTub-k7yv0Bv1/view?usp=sharing", // Placeholder for download
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
      ],
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js", percentage: 60 },
        { name: "Express.js", percentage: 75 },
        { name: "MongoDB", percentage: 95 },
        { name: "MySQL", percentage: 40 },
      ],
    },
    {
      category: "Programming & Tools",
      items: [
        { name: "C++", percentage: 60 },
        { name: "Java", percentage: 65 },
        { name: "Git & GitHub", percentage: 85 },
        { name: "VS Code", percentage: 99 },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Cityweather",
      shortDescription:
        "A responsive weather application that provides real-time weather updates for cities worldwide.",
      description:
        "CityWeather is a modern weather forecasting web application that allows users to search for any city and view current weather conditions, temperature, humidity, wind speed, and other essential weather details using live weather APIs.",
      fullDetails:
        "The application integrates with a weather API to fetch real-time weather data and presents it through a clean, responsive, and user-friendly interface. Users can search for cities globally and get accurate weather information instantly.",
      features: [
        "Real-time weather updates",
        "City-based weather search",
        "Temperature, humidity & wind details",
        "Responsive design for all devices",
        "Fast API integration",
        "Clean and intuitive UI",
      ],
      challenge:
        "Fetching and displaying accurate real-time weather data while maintaining a fast and responsive user experience.",
      solution:
        "Integrated a weather API with efficient error handling, optimized API requests, and built a responsive frontend using modern web development practices.",
      tech: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Vite",
        "Weather API",
        "GitHub",
      ],
      githubUrl: "https://github.com/satyamkrsah/Cityweather",
      liveUrl: "https://cityweather-rho.vercel.app/",
      image: Cityweather,
      category: "Full stack",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      shortDescription:
        "A modern, highly responsive developer portfolio with advanced animations.",
      description:
        "A modern, highly responsive developer portfolio website featuring advanced UI/UX animations, dark/light theme support, and premium glassmorphism design patterns.",
      fullDetails:
        "This portfolio website showcases a collection of my projects and skills with a focus on modern design principles and smooth user interactions. Built with React and Tailwind CSS, it features smooth animations, dark mode support, and is fully responsive across all devices.",
      features: [
        "Smooth scroll animations",
        "Dark/Light theme toggle",
        "Glassmorphism design",
        "Responsive layout",
        "Project showcase",
        "Contact form integration",
      ],
      challenge:
        "Creating a visually appealing design while maintaining excellent performance and accessibility standards.",
      solution:
        "Used Framer Motion for animations with proper performance optimization. Implemented lazy loading for images and used Tailwind CSS for efficient styling.",
      tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "React Router",
        "React Icons",
      ],
      githubUrl: "https://github.com/satyamkrsah/My-Portfolio",
      liveUrl: "https://satyamkrsah.vercel.app/",
      image: portfolio,
      category: "Frontend",
    },
    {
      id: 3,
      title: "SATYAM PRINTING PRESS",
      shortDescription:
        "A modern full-stack printing and customization platform for premium invitation cards and commercial printing services.",

      description:
        "A full-stack printing business website that enables customers to explore premium invitation cards, business stationery, and customized printing products. The platform includes category-wise browsing, product customization, quotation requests, secure ordering, and order tracking.",

      fullDetails:
        "Satyam Printing Press is a complete online printing solution built with modern web technologies. Customers can browse wedding cards, visiting cards, brochures, flyers, banners, bill books, certificates, and other customized printing products. The platform supports user authentication, online orders, secure payments, order tracking, and an admin dashboard for product and order management.",

      features: [
        "Category-wise product browsing",
        "Product customization options",
        "User registration & login",
        "Online order placement",
        "Secure payment integration",
        "Order tracking system",
        "Admin dashboard for product management",
        "Customer inquiry & quotation requests",
        "Responsive design for all devices",
        "Email & order status notifications",
      ],

      challenge:
        "The biggest challenge was designing a scalable product management system where products, prices, and categories can be updated regularly without modifying the frontend. Another challenge was managing customized printing orders with different specifications.",

      solution:
        "Implemented a Node.js and Express backend with MongoDB for dynamic product management, JWT authentication for secure user access, Cloudinary for product image storage, and REST APIs to handle products, orders, users, and payment processing efficiently.",

      tech: [
        "React.js",
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "JWT",
        "Cloudinary",
      ],

      githubUrl: "https://github.com/satyamkrsah/Satyampress.git",

      liveUrl: "https://satyampress.vercel.app/",

      image: spp,

      category: "Ongoing Project",
    },
    {
  id: 4,
  title: "RainRoute AI",
  shortDescription:
    "An intelligent weather-aware route planning and navigation platform that helps travelers detect and avoid rain along their journey.",

  description:
    "A full-stack intelligent weather navigation platform designed to help users plan safer journeys by analyzing real-time and forecast weather conditions along their entire route. RainRoute AI combines route mapping, weather forecasting, rain intensity analysis, live GPS navigation, vehicle selection, and dynamic alerts to provide users with a weather-aware travel experience.",

  fullDetails:
    "RainRoute AI is a modern full-stack weather-aware navigation platform that analyzes weather conditions across the complete journey from origin to destination. Instead of showing weather only at the current location, the system samples multiple points along the route and matches weather forecasts with the estimated arrival time at each location. The platform visualizes rain intensity using color-coded route segments and provides weather information, alerts, estimated arrival time, distance, vehicle-specific navigation, live GPS tracking, journey progress, and upcoming weather conditions. Users can select different vehicle types such as Bike, Car, Auto, Truck, or Bus and use live navigation to monitor their journey in real time.",

  features: [
    "Weather-aware route analysis",
    "Real-time rain detection along the entire route",
    "Color-coded route based on rain intensity",
    "Weather forecast matched with estimated arrival time",
    "Live GPS navigation and location tracking",
    "Real-time vehicle speed and journey progress",
    "Bike, Car, Auto, Truck & Bus vehicle selection",
    "Animated vehicle movement along the route",
    "Distance, ETA and remaining journey tracking",
    "Interactive weather timeline",
    "Dynamic rain and safety alerts",
    "Current location detection",
    "Route weather markers and upcoming weather events",
    "Smart departure recommendations",
    "Responsive modern dark/light UI",
    "User authentication and saved trips",
  ],

  challenge:
    "The main challenge was accurately predicting weather conditions at different points of a journey based on both location and estimated arrival time. The system also needed to continuously update route progress, GPS location, vehicle movement, weather conditions, and safety alerts without disrupting the navigation experience.",

  solution:
    "Implemented route sampling and distance-based ETA calculations to determine when the user is expected to reach each point of the journey. Weather forecast data is then matched with each waypoint's estimated arrival time. The frontend visualizes rain intensity through color-coded route segments and interactive weather timelines. Live browser geolocation is used for GPS tracking, while vehicle-specific speeds and animated markers provide a navigation experience similar to modern ride and navigation applications. REST APIs, JWT authentication, and MongoDB are used for backend services and user data management.",

  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Vite",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "JWT",
    "Leaflet",
    "OpenStreetMap",
    "OpenWeather API",
    "Geolocation API",
    "Framer Motion",
    "Git",
    "GitHub",
  ],

  githubUrl: "https://github.com/satyamkrsah/RainRoute-Ai",
  liveUrl: "https://rainroute-ai.vercel.app",
  image: rainroute,
  category: "Ongoing Project",
},
  ],
  education: {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    institution: "Computer Science Engineering Institution",
    period: "2024-2028 (Expected)",
    description:
      "Focusing on core computer science foundations, engineering principles, and practical software design paradigms.",
    subjects: [
      "Software Engineering",
      "Data Structures",
      "DBMS",
      "Operating Systems",
      "Computer Organization & Architecture",
      "Machine Learning Fundamentals",
    ],
  },
  achievements: [
    {
      title: "Full Stack Development Projects",
      description:
        "Successfully designed and deployed multiple full-stack applications with modular frontend and secure REST APIs.",
    },
    {
      title: "Strong Software Engineering Knowledge",
      description:
        "Solid grasp of computer science fundamentals including OOP, DBMS, OS, DSA, and agile development methodologies.",
    },
    {
      title: "Frontend & Backend Experience",
      description:
        "Proficient in bridging the gap between database systems and interactive user experiences with premium styling.",
    },
    {
      title: "Continuous Learning Mindset",
      description:
        "Consistently expanding skill set with modern libraries, cloud services, and framework optimizations.",
    },
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
