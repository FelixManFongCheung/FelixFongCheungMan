"use client"

import { useState } from "react";
import Circle from "@/components/circle";
import Content from "@/components/content";
import Links from "@/components/links";
import { useTheme } from "@/contexts/ThemeContext";

type Title = "Projects" | "About" | "Contact" | "";

export default function Home() {
  const { toggleTheme } = useTheme();
  const [title, setTitle] = useState<Title>("");
  const [project, setProject] = useState("");  

  return (
    <div className="bg-theme-light-background dark:bg-theme-dark-background
      text-theme-light-text dark:text-theme-dark-text relative p-8 pt-16 md:p-8 w-[100vw] min-h-screen max-h-fit md:h-[100vh] flex gap-4 md:gap-0 items-center justify-center flex-col md:flex-row">
      <button className="absolute top-4 right-4 w-4 h-4 rounded-full bg-theme-light-switch dark:bg-theme-dark-switch" onClick={toggleTheme}></button>
      <div className="md:order-2 z-[99]">
        <Circle setTitle={setTitle} />
      </div>
      <div className="relative w-full flex flex-1 flex-col gap-4 md:h-full md:order-1">
        <Content title={title} project={project} setProject={setProject} />
      </div>
      <div className="w-full flex flex-1 flex-col gap-[0.3rem] text-blue-500 underline order-3">
        <Links title={title} setProject={setProject} />
      </div>
    </div>
  );
}
