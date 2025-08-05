interface projects {
  name: string;
  link: string;
  stack: string[];
}

interface contact {
  link: string;
  label: string;
}

interface about {
  intro: string;
  skills?: string[];
  experience?: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
}

export const data: {
  projects: projects[];
  contact: contact[];
  about: about;
} = {
  projects: [
    {
      name: "E-commerce Portfolio",
      link: "https://web-ecommerce-shop.vercel.app/",
      stack: ["Next.js", "TypeScript", "SCSS", "Stripe"],
    },
    {
      name: "Portfolio Website",
      link: "https://lojunrui.com/",
      stack: ["React", "Redux"],
    },
    {
      name: "'your face looked like you'd been erased'",
      link: "https://hcguirmehicogmhi45wuct98m4xf9cjhu8fhxmio.onrender.com",
      stack: ["Javascript"],
    },
    {
      name: "Masculinity AI",
      link: "https://heaven-chat.vercel.app/",
      stack: ["Next.js", "Deepseek", "TypeScript", "GSAP", "Tailwind"],
    },
    {
      name: "Goach-AI",
      link: "https://goach-ai.com/",
      stack: [
        "Next.js",
        "TypeScript",
        "Shadcn",
        "Tailwind",
        "Firebase",
        "React-Hook-Form",
        "Zustand",
      ],
    },
    {
      name: "Pike",
      link: "https://usepike.com/",
      stack: [
        "Next.js",
        "TypeScript",
        "Shadcn",
        "Tailwind",
        "Firebase",
        "Zustand",
        "Tandstack-Query",
        "React-Hook-Form",
      ],
    },
    {
      name: "Themison",
      link: "",
      stack: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "OpenAI",
        "AWS",
        "LangChain",
        "Supabase",
      ],
    },
  ],
  contact: [
    {
      link: "mailto:manfongcheung74@gmail.com",
      label: "Email",
    },
    {
      link: "https://www.linkedin.com/in/felixmanfc24",
      label: "LinkedIn",
    },
    {
      link: "https://github.com/FelixManFongCheung",
      label: "GitHub",
    },
  ],
  about: {
    intro: `I am a self-taught software engineer with a passion for web development, 
            AI implementation and creative coding. 
            My blend of academic knowledge of data science and hands-on experience of full-stack web development has given me opportunities to make data-driven decisions and build products that are both functional and aesthetically pleasing. 
            I recently finished my master's degree in Social Data Science at the University of Copenhagen and completed an internship at a startup company that has a focus on implementing AI solutions for product management. 
            I am currently looking for a job that allows me to work with AI, data and web with a touch of creativity. 
            Please don't hesitate to contact me.
        `,
    skills: [
      "Next.js",
      "TypeScript",
      "AI Integration",
      "Creative Coding",
      "GSAP",
      "GCP",
      "Supabase",
      "Python",
      "Stripe",
    ],
    experience: [
      {
        title: "Frontend Developer",
        company: "Goach-AI",
        period: "04/2025 - Present",
        description:
          "Developed the frontend of a rehabilitation platform for a startup company. The app is capable of handling authentication through firebase, and a variety of data visualisations to report client's posture analysis.",
      },
      {
        title: "Backend Developer",
        company: "Themison",
        period: "03/2025 - Present",
        description:
          "Developed a backend RAG system for a health-care management system using MVC design. There are multiple services to handle both the indexing and retrieval-generation steps. OpenAI's api is implemented for embedding generation and PostgreSQL for hybrid search in the retrieval generation step",
      },
      {
        title: "Frontend Developer",
        company: "Pike",
        period: "03/2025 - Present",
        description:
          "Developed and maintained a CRM system for consultancy companies. Notable work are implementing a generic timeline system injected with business entities for multiple components and Zustand implementation with error boundaries on rerender. Implementations are executed with performance optimisation and type safety",
      },
      {
        title: "Fullstack/ Gen-AI Developer",
        company: "Meshfirm",
        period: "10/2024 - 12/2024",
        description: "Implemented AI solutions for a product management agent",
      },
      {
        title: "Frontend Developer",
        company: "Blacklemon/ Obsidian",
        period: "10/2021 - 2/2024",
        description: "Developed e-commerce websites for clients using Shopify",
      },
      {
        title: "Junior software developer",
        company: "PPWI",
        period: "1/2021 - 7/2021",
        description:
          "Developed a child-friendly applications using react-native and Vue.js",
      },
    ],
  },
};
