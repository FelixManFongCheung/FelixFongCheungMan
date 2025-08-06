import { data } from "@/data";

export default function Preview({ project }: { project: string }) {
  const previewUrl = data.projects.find(
    (p) => p.name === project
  )?.previewVideo;

  if (!previewUrl) {
    return null;
  }

  return (
    <div className="absolute inset-0 transform -translate-x-[25%] -translate-y-[calc(100%/18)] w-fit h-fit">
      <div className="w-[600px] aspect-video opacity-50">
        <video
          src={previewUrl}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
