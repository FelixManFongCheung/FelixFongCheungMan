"use client"

import { useState } from 'react';
import { data } from "@/data";

export default function Links({ title, setProject }: { title: string, setProject: (project: string) => void }) {  
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handleProjectClick = (projectName: string) => {
    setActiveProject(activeProject === projectName ? null : projectName);
    setProject(projectName);
  };

  switch (title) {
    case "Projects":
      return (
        <>
          {data.projects.map((project) => (
            <div 
              key={project.name} 
              className="w-fit ml-auto cursor-pointer relative overflow-hidden"
            >
              <div 
                onClick={() => handleProjectClick(project.name)}
                className="hover:text-gray-600 transition-colors"
              >
                {project.name}
              </div>
              <div 
                className={`
                  transform
                  transition-all
                  duration-300
                  ease-in-out
                  ${activeProject === project.name ? 'h-[30px] opacity-100' : 'h-0 opacity-0'}
                `}
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-right mt-2 text-xs text-blue-500"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </>
      )
    case "Contact":
      return (
        <>
          {data.contact.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit ml-auto hover:text-gray-600 transition-colors"
            >
              <div>{contact.label}</div>
            </a>
          ))}
        </>
      )
    default:
      return <div></div>
  }
}
