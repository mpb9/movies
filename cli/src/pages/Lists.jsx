import FilePreview from "src/components/FilePreview";
import { listsFiles } from "src/models/FileSpecs";
export default function Lists() {
  return (
    <div className="flex flex-col w-full items-start" id="lists">
      <div className="w-full items-center px-24 overflow-scroll">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-4xl font-bold">Lists</h1>
          <p className="text-lg text-gray-500">
            Lists are a way to organize your movies and shows. You can create
            lists for different genres, moods, or any other category you can
            think of.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start w-full h-fit overflow-x-scroll scroll-smooth scrollbar-hide">
        {listsFiles.map((fileSpecs, index) => (
          <FilePreview key={index} fileSpecs={fileSpecs} src={"files/lists/"} />
        ))}
      </div>
    </div>
  );
}
