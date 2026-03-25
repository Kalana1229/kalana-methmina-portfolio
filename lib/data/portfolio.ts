import { Project, Skill, Experience, Education } from '@/lib/types';

/**
 * PORTFOLIO DATA - Customize this with your information
 */

// Personal information
export const PERSONAL_INFO = {
  name: 'Kalana Methmina',
  title: 'Software Engineering Undergraduate',
  description: 'Software Engineering undergraduate with hands-on experience in full-stack development and a strong focus on building secure, scalable, and user-centric applications. Skilled in React, Flutter, Node.js, Java, Python, and modern web technologies, with a solid understanding of cybersecurity principles.',
  shortBio: 'I specialize in developing efficient and maintainable solutions that integrate robust backend systems with intuitive and responsive user interfaces. With practical experience from academic and real-world projects, I aim to contribute to building reliable and innovative software systems.',
  email: 'kalanamethmina@gmail.com',
  phone: '+94 76 24 04 179',
  location: 'Sri Lanka',
  avatar: '/profile.png',
  resume: '/resume.pdf',
};

// Social media links
export const SOCIAL_LINKS = {
  github: 'https://github.com/Kalana1229',
  linkedin: 'https://www.linkedin.com/in/kalana-methmina-b1a47028a/',
  twitter: 'https://twitter.com/alexmorgan_dev',
  email: 'kalanamethmina@gmail.com',
  cv: '/resume.pdf',
};

// Skills data
export const SKILLS: Skill[] = [
  // Frontend
  { name: 'ReactJS', category: 'Frontend', proficiency: 'Advanced' },
  { name: 'Flutter', category: 'Frontend', proficiency: 'Advanced' },
  { name: 'HTML5', category: 'Frontend', proficiency: 'Expert' },
  { name: 'CSS3', category: 'Frontend', proficiency: 'Expert' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', proficiency: 'Expert' },
  { name: 'TypeScript', category: 'Frontend', proficiency: 'Advanced' },

  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 'Advanced' },
  { name: 'Java', category: 'Backend', proficiency: 'Advanced' },
  { name: 'Python', category: 'Backend', proficiency: 'Advanced' },
  { name: 'C', category: 'Backend', proficiency: 'Intermediate' },
  { name: 'Spring Boot', category: 'Backend', proficiency: 'Intermediate' },
  { name: 'Express.js', category: 'Backend', proficiency: 'Advanced' },
  { name: 'PHP CodeIgniter', category: 'Backend', proficiency: 'Advanced' },
  { name: 'GraphQL', category: 'Backend', proficiency: 'Intermediate' },

  // Databases
  { name: 'MySQL', category: 'Tools', proficiency: 'Expert' },
  { name: 'PostgreSQL', category: 'Tools', proficiency: 'Advanced' },
  { name: 'MongoDB', category: 'Tools', proficiency: 'Advanced' },
  { name: 'MSSQL', category: 'Tools', proficiency: 'Intermediate' },
  { name: 'Redis', category: 'Tools', proficiency: 'Intermediate' },

  // DevOps & Tools
  { name: 'AWS', category: 'DevOps', proficiency: 'Advanced' },
  { name: 'Git', category: 'Tools', proficiency: 'Expert' },
  { name: 'Postman', category: 'Tools', proficiency: 'Advanced' },
  { name: 'Figma', category: 'Tools', proficiency: 'Advanced' },
  { name: 'Photoshop', category: 'Tools', proficiency: 'Intermediate' },
  { name: 'Atmel Studio', category: 'Tools', proficiency: 'Intermediate' },

  // Testing & AI
  { name: 'Selenium', category: 'Tools', proficiency: 'Intermediate' },
  { name: 'RestAssured', category: 'Tools', proficiency: 'Intermediate' },
  { name: 'JUnit', category: 'Tools', proficiency: 'Intermediate' },
  { name: 'scikit-learn', category: 'Backend', proficiency: 'Intermediate' },
  { name: 'Keras', category: 'Backend', proficiency: 'Intermediate' },
  { name: 'TensorFlow', category: 'Backend', proficiency: 'Intermediate' },
];

// Projects data
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Textile and Garment Management System',
    description: 'Full-stack warehouse management solution with real-time inventory tracking',
    longDescription:
      'Developed a comprehensive full-stack solution using PHP, MySQL, and JavaScript to digitize manual warehouse operations. Features real-time stock visibility, client data integration, and automated item tracking reducing manual data entry errors significantly.',
    image: '/Textile%20and%20Garment%20Management%20System.jpg',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Warehouse Management'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: '2',
    title: 'Online Vehicle Service & Fuel Station Management',
    description: 'Robust system automating service station workflows and billing',
    longDescription:
      'Engineered a robust system using Java and OOP principles to automate service station workflows. Implements automated billing, fuel usage analysis, and detailed service history tracking improving transaction speed and customer retention.',
    image: '/Online%20Vehicle%20Service%20&%20Fuel%20Station%20Management.jpg',
    tags: ['Java', 'OOP', 'Billing System'],
    category: 'backend',
    featured: true,
  },
  {
    id: '3',
    title: 'Flower Planting Management System',
    description: 'Agricultural management platform using MEAN Stack',
    longDescription:
      'Utilized the MEAN Stack (MongoDB, Express, Angular, Node.js) to create an optimized planning and maintenance platform for agricultural use. Provides user-friendly interface with automated care scheduling and monitoring reducing plant loss.',
    image: '/Flower%20Planting%20Management%20System.jpg',
    tags: ['MEAN Stack', 'MongoDB', 'Angular', 'Node.js'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: '4',
    title: 'TaskMate - Mobile Task Manager',
    description: 'Productivity application with automated reminders and intuitive UX',
    longDescription:
      'Designed and developed a mobile productivity application using Android Studio and Figma. Features seamless User Experience with automated reminders and task tracking. Increased user organizational efficiency and reduced task oversight.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tags: ['Android Studio', 'Figma', 'Mobile App', 'UX Design'],
    category: 'frontend',
    featured: false,
  },
  {
    id: '5',
    title: 'UberEats UI Prototype',
    description: 'High-fidelity delivery app prototype with modern design patterns',
    longDescription:
      'Created a high-fidelity delivery prototype using Android Studio and Figma. Prioritized frictionless user journey for browsing and ordering, demonstrating ability to reduce user drop-off rates through modern, responsive design.',
    image: '/UberEats%20UI%20Prototype.jpg',
    tags: ['Android Studio', 'Figma', 'UI Design', 'Prototype'],
    category: 'frontend',
    featured: false,
  },
  {
    id: '6',
    title: 'Harvesting Management System',
    description: 'Agricultural harvesting platform with real-time crop management and inventory tracking',
    longDescription:
      'Developed a comprehensive harvesting management system using PHP CodeIgniter framework and MySQL. Features real-time crop monitoring, harvest scheduling, inventory management, and analytics reporting. Designed to streamline agricultural operations and optimize harvesting processes.',
    image: '/Harvesting%20Management%20System.png',
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'Agriculture'],
    category: 'fullstack',
    featured: true,
  },
];

// Experience data
export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'CloudBuzz',
    position: 'Software Engineer Intern',
    startDate: '2025-06-01',
    current: true,
    description:
      'Developed and maintained real-world web applications using PHP CodeIgniter 3, contributing to scalable and maintainable system architecture. Designed and implemented key features including CRUD operations, user authentication, and data management systems. Integrated responsive front-end components using HTML, CSS, JavaScript, and Bootstrap, ensuring a smooth user experience across devices. Collaborated effectively with team members to deliver project modules on time and according to requirements. Improved application performance through code optimization and efficient database queries. Followed best practices in clean code, debugging, and version control (Git). Gained hands-on experience in full-stack development and real-world project workflows.',
    technologies: ['PHP', 'CodeIgniter 3', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git'],
  },
];

// Education data
export const EDUCATION: Education[] = [
  {
    id: '1',
    institution: 'Sri Lanka Institute of Information Technology',
    degree: 'BSc (Hons) Degree',
    field: 'Information Technology - Software Engineering',
    startDate: '2023-01-01',
    endDate: '2026-06-30',
  },
  {
    id: '2',
    institution: 'Walisinghe Harishchandra Maha Vidyalaya',
    degree: 'G.C.E. Advanced Level',
    field: 'Engineering Technology',
    startDate: '2018-01-01',
    endDate: '2020-12-01',
  },
  {
    id: '3',
    institution: 'Maithripala Senanayake Central College',
    degree: 'G.C.E. Ordinary Level',
    field: 'General Education',
    startDate: '2017-01-01',
    endDate: '2017-12-01',
  },
];

export const CERTIFICATIONS = [
  {
    id: '1',
    title: 'Google Cloud Certified - Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: '2025-02-01',
    credentialId: 'GCP-123456',
    link: 'https://www.credential.net/GCP-123456',
  },
];

// Blog posts (sample data)
export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Building Secure Web Applications: Comprehensive OWASP Top 10 Guide',
    slug: 'owasp-top-10-guide',
    excerpt: 'A deep dive into the OWASP Top 10 vulnerabilities and practical strategies to protect your web applications from the most critical security risks in 2024...',
    image: 'https://images.unsplash.com/photo-1555949519-51d772f27c4b?w=600&h=400&fit=crop',
    tags: ['Security', 'OWASP', 'Web Development', 'Best Practices'],
    published: true,
    publishedAt: '2024-03-15T00:00:00Z',
    updatedAt: '2024-03-15T00:00:00Z',
  },
];

// Testimonials (optional)
export const TESTIMONIALS = [
  {
    name: 'Malshan Rathnayake',
    role: 'Associate Software Engineer at Impact IT',
    text: 'Kalana is an exceptional developer with strong technical skills and great attention to detail. Working with them was productive and insightful.',
    image: 'https://avatars.githubusercontent.com/u/1234?v=4',
  },
  {
    name: 'Ravindu Dharmasena',
    role: 'Software Engineer at Eyepax IT Consulting',
    text: 'Outstanding work on the CodeIgniter projects. Kalana shows great potential and dedication to writing clean, maintainable code.',
    image: 'https://avatars.githubusercontent.com/u/5678?v=4',
  },
];

// Services/Expertise
export const SERVICES = [
  {
    id: '1',
    title: 'Full-Stack Development',
    description: 'End-to-end development using PHP (CodeIgniter), Node.js, Java, and Python with focus on building secure, scalable applications.',
    icon: '🔧',
  },
  {
    id: '2',
    title: 'Frontend Development',
    description: 'Modern UI development with React, Flutter, HTML5, CSS3, JavaScript, and TypeScript ensuring responsive and intuitive user experiences.',
    icon: '💻',
  },
  {
    id: '3',
    title: 'Backend Development',
    description: 'Robust API development with REST APIs, Express.js, Spring Boot, and GraphQL following best practices and design patterns.',
    icon: '⚙️',
  },
  {
    id: '4',
    title: 'Database Management',
    description: 'Design and optimization of databases including MySQL, PostgreSQL, MongoDB, MSSQL, and Redis for optimal performance.',
    icon: '🗄️',
  },
  {
    id: '5',
    title: 'Mobile App Development',
    description: 'Native app development using Flutter and Android Studio with focus on creating high-performance and user-friendly mobile applications.',
    icon: '📱',
  },
  {
    id: '6',
    title: 'UI/UX Design',
    description: 'User-centered design and prototyping using Figma, creating intuitive and visually appealing interfaces for web and mobile applications.',
    icon: '🎨',
  },
  {
    id: '7',
    title: 'Software Development Principles',
    description: 'Clean code development using Object-Oriented Programming (OOP) principles, ensuring maintainability, scalability, and performance.',
    icon: '📐',
  },
  {
    id: '8',
    title: 'Cybersecurity & Secure Coding',
    description: 'Implementation of secure coding practices with awareness of cybersecurity principles and OWASP vulnerabilities.',
    icon: '🔐',
  },
  {
    id: '9',
    title: 'Version Control & Collaboration',
    description: 'Expertise in Git and GitHub for version control, enabling efficient team collaboration and code management.',
    icon: '🌳',
  },
  {
    id: '10',
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing using JUnit, Selenium, and RestAssured to ensure code quality and application reliability.',
    icon: '✅',
  },
];

// Project categories
export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' },
];
