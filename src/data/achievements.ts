export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  organization: string;
  image: string;
  category: string;
  details?: string;
}

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "2nd Place Winner - Programming Competition",
    description: "Won second place in a prestigious programming competition",
    date: "2024",
    organization: "Tech Competition",
    image: "/image/juara/sertifikat juara 2.png",
    category: "Competition",
    details:
      "Demonstrated exceptional programming skills and problem-solving abilities in a competitive programming environment.",
  },
  {
    id: "2",
    title: "Best Capstone Project",
    description: "Awarded best capstone project in Coding Camp 2025",
    date: "2025",
    organization: "Coding Camp 2025 - University",
    image:
      "/image/juara/[Coding Camp 2025 - University] Best Capstone Project - FC322D5Y1088 (1).jpg",
    category: "Academic",
    details:
      "Developed an innovative project that stood out among all capstone projects in the Coding Camp program.",
  },
  {
    id: "3",
    title: "English for Business Communication",
    description: "Completed English for Business Communication certification",
    date: "2024",
    organization: "Professional Development",
    image: "/image/juara/English for Business Communication.png",
    category: "Certification",
    details:
      "Enhanced communication skills in business English to improve professional interactions and presentations.",
  },
];
