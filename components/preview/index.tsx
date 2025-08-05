import { data } from "@/data";

export default function Preview({ project }: { project: string }) {
  const projectData = data.projects.find((p) => p.name === project);

  if (!projectData) {
    return null;
  }

  return <div className="absolute inset-0 w-screen h-screen bg-red-500"></div>;
}
