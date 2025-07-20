export interface Certificate {
  id: string;
  title: string;
  description: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
  skills: string[];
  credentialId?: string;
  expiryDate?: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Best Capstone Project",
    description:
      "Certificate for achieving the best capstone project in Coding Camp 2025",
    issuer: "Coding Camp 2025 - University",
    date: "2025",
    image:
      "/image/sertifikat/[Coding Camp 2025 - University] Best Capstone Project - FC322D5Y1088 (1).jpg",
    category: "Academic Excellence",
    skills: [
      "Project Management",
      "Full-Stack Development",
      "Innovation",
      "Problem Solving",
    ],
    credentialId: "FC322D5Y1088",
  },
  {
    id: "2",
    title: "English for Business Communication",
    description:
      "Professional certification in business English communication skills",
    issuer: "Professional Development Institute",
    date: "2024",
    image: "/image/sertifikat/English for Business Communication.png",
    category: "Language & Communication",
    skills: [
      "Business English",
      "Professional Communication",
      "Presentation Skills",
      "Written Communication",
    ],
  },
  {
    id: "3",
    title: "Programming Competition Certificate",
    description: "2nd place achievement certificate in programming competition",
    issuer: "Tech Competition Organization",
    date: "2024",
    image: "/image/sertifikat/sertifikat juara 2 tim.png",
    category: "Technical Achievement",
    skills: [
      "Algorithm Design",
      "Problem Solving",
      "Competitive Programming",
      "Team Collaboration",
    ],
  },
];
