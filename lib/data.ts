export interface Work {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  imageUrl?: string;
  techStack?: string[];
  role?: string;
  links?: {
    demo?: string;
    repo?: string;
  };
}

export const worksData: Work[] = [
  {
    id: "1",
    title: "Project Alpha",
    description: "A comprehensive e-commerce platform built with Next.js and Stripe.",
    fullDescription: "Project Alpha is a full-featured e-commerce solution designed to provide a seamless shopping experience. It includes a real-time inventory system, a custom user dashboard for order tracking, and a secure checkout process integrated with Stripe. The main challenge was ensuring high performance while handling complex state management for the shopping cart and user preferences.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe API", "PostgreSQL", "Prisma"],
    role: "Full Stack Developer",
    links: {
      demo: "https://example.com",
      repo: "https://github.com/example/project-alpha"
    }
  },
  {
    id: "2",
    title: "Task Master",
    description: "Productivity application with drag-and-drop interface and real-time updates.",
    fullDescription: "Task Master is a collaborative project management tool that allows teams to organize tasks using a Kanban-style board. It features drag-and-drop functionality, real-time updates using WebSockets, and team permission management. I focused on building a responsive and intuitive UI that mimics desktop application behavior in the browser.",
    tags: ["React", "Redux", "Node.js", "Socket.io"],
    techStack: ["React", "Redux Toolkit", "Node.js", "Express", "Socket.io", "MongoDB"],
    role: "Frontend Lead",
    links: {
      repo: "https://github.com/example/task-master"
    }
  },
  {
    id: "3",
    title: "Portfolio v1",
    description: "My first portfolio site. Simple, clean, and fast.",
    fullDescription: "This was my first attempt at building a personal portfolio. The goal was to learn CSS Grid and Flexbox deeply while creating a showcase for my early coding experiments. Although simple, it taught me the fundamentals of responsive web design and accessibility.",
    tags: ["HTML", "CSS", "JavaScript"],
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript"],
    role: "Designer & Developer",
    links: {
      demo: "https://example.com/v1"
    }
  },
];
