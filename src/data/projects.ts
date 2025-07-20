export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  category: string;
  status: "completed" | "in-progress" | "planned";
  startDate: string;
  endDate?: string;
  images: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  githubUrl?: string;
  liveUrl?: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website v2",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring a beautiful bento grid layout and smooth animations.",
    shortDescription: "Modern portfolio website with bento grid design",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    status: "in-progress",
    startDate: "2025-01",
    images: ["/image/project/portfolio-preview.jpg"],
    features: [
      "Responsive bento grid layout",
      "Smooth animations and transitions",
      "Dark/light mode support",
      "SEO optimized",
      "Modern UI/UX design",
    ],
    challenges: [
      "Creating a unique and eye-catching design",
      "Implementing smooth animations without performance issues",
      "Optimizing for mobile devices",
    ],
    solutions: [
      "Used CSS Grid and Flexbox for responsive layout",
      "Implemented CSS transitions for smooth animations",
      "Utilized Tailwind CSS for efficient styling",
    ],
    role: "Full-Stack Developer & Designer",
  },
  {
    id: "2",
    title: "Coding Camp Capstone Project",
    description:
      "An innovative web application developed during Coding Camp 2025 that won the Best Capstone Project award.",
    shortDescription: "Award-winning capstone project from Coding Camp 2025",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    category: "Full-Stack Development",
    status: "completed",
    startDate: "2025-02",
    endDate: "2025-07",
    images: [
      "/image/project/[Coding Camp 2025 - University] Best Capstone Project - FC322D5Y1088 (1).jpg",
    ],
    features: [
      "User authentication and authorization",
      "Real-time data updates",
      "Responsive design",
      "RESTful API integration",
      "Database management",
    ],
    challenges: [
      "Implementing real-time features",
      "Managing complex state",
      "Ensuring data security",
    ],
    solutions: [
      "Used WebSocket for real-time communication",
      "Implemented Redux for state management",
      "Applied JWT for secure authentication",
    ],
    role: "Full-Stack Developer",
  },
  {
    id: "3",
    title: "Student Welfare Management System",
    description:
      "A comprehensive management system for student welfare activities in Himpunan Mahasiswa Informatika USK.",
    shortDescription: "Management system for student organization",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
    category: "Web Application",
    status: "completed",
    startDate: "2024-02",
    endDate: "2024-12",
    images: ["/image/project/student-welfare-system.jpg"],
    features: [
      "Student data management",
      "Event scheduling",
      "Report generation",
      "Role-based access control",
      "Dashboard analytics",
    ],
    challenges: [
      "Managing large amounts of student data",
      "Creating intuitive user interface",
      "Implementing role-based permissions",
    ],
    solutions: [
      "Optimized database queries for performance",
      "Used Bootstrap for responsive UI",
      "Implemented Laravel's built-in authorization",
    ],
    role: "Lead Developer",
  },
];
