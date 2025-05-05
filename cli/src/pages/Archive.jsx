import FilePreview from "src/components/FilePreview";
import { archiveFiles } from "src/models/FileSpecs.js";
export default function Archive() {
  return (
    <div className="flex flex-col w-full items-start" id="archive">
      <div className="w-full items-center px-24 overflow-scroll">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-4xl font-bold">Archive</h1>
          <p className="text-lg font-light">
            A collection of all the movies and shows I have watched.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start w-full h-fit overflow-x-scroll scroll-smooth scrollbar-hide">
        {archiveFiles.map((fileSpecs, index) => (
          <FilePreview
            key={index}
            fileSpecs={fileSpecs}
            src={"files/archive/"}
          />
        ))}
      </div>
    </div>
  );
}
