"use client";

import { data } from "@/data";
import { useEffect } from "react";

export default function Content({
  title,
  project,
  setProject,
}: {
  title: string;
  project: string;
  setProject: (project: string) => void;
}) {
  const projectName = project;

  useEffect(() => {
    setProject("");
  }, [title, setProject]);

  switch (title) {
    case "About":
      return (
        <div
          className={`
                    md:absolute 
                    md:h-full 
                    md:w-[40vw]
                `}
        >
          {data.about.intro}
        </div>
      );
    case "Projects":
      return projectName ? (
        <div
          className={`
                    fixed 
                    top-[calc(4rem+150px)] 
                    left-1/2
                    transform 
                    -translate-y-1/2 
                    -translate-x-1/2 
                    text-center 
                    z-[99] 
                    backdrop-blur-lg 
                    ${projectName ? "p-2" : ""}
                    
                    md:absolute 
                    md:h-full 
                    md:w-[40vw]
                    md:transform-none
                    md:translate-x-0 
                    md:translate-y-0 
                    md:text-left    
                    md:z-0         
                    md:backdrop-blur-none
                    md:left-auto
                `}
        >
          {data.projects
            .find((project) => project.name === projectName)
            ?.stack.map((stack) => (
              <div key={stack}>[{stack}]</div>
            ))}
        </div>
      ) : null;
    default:
      return null;
  }
}
