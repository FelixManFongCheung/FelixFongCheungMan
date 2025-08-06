import { data } from "@/data";

export default function Preview({ project }: { project: string }) {
  const previewUrl = data.projects.find(
    (p) => p.name === project
  )?.previewVideo;

  if (!previewUrl) {
    return null;
  }

  return (
    <div className="absolute inset-0 transform w-fit h-fit md:-translate-x-[25%] md:-translate-y-[calc(100%/18)]">
      <div className="w-screen max-w-[600px] aspect-video opacity-50">
        <video
          src={previewUrl}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
