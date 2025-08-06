"use client";

import { Separator } from "@/components/ui/separator";
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
                    font-extrabold
                    text-2xl
                    md:overflow-y-auto
                    md:no-scrollbar
                `}
        >
          <div>{data.about.intro}</div>
          <br />
          <Separator />
          <br />
          <div>
            {data.about.experience?.map((experience) => (
              <>
                <div key={`experience-${experience.title}`}>
                  <div>{experience.title}</div>
                  <div>[{experience.company}]</div>
                  <div>{experience.period}</div>
                  <div>{experience.description}</div>
                </div>
                <br />
              </>
            ))}
          </div>
          <br />
          <Separator />
          <br />
          <div>
            {data.about.skills?.map((skill) => (
              <div key={`skill-${skill}`}>[{skill}]</div>
            ))}
          </div>
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
              <div key={`${projectName}-${stack}`}>[{stack}]</div>
            ))}
        </div>
      ) : null;
    default:
      return null;
  }
}
