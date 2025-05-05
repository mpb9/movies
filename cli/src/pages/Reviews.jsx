import FilePreview from "src/components/FilePreview";
import { reviewsFiles } from "src/models/FileSpecs";
export default function Reviews() {
  return (
    <div className="flex flex-col w-full items-start" id="reviews">
      <div className="w-full items-center px-24 overflow-scroll">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-4xl font-bold">Reviews</h1>
          <p className="text-lg font-light">
            A collection of reviews and articles.
          </p>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-fit overflow-x-scroll scroll-smooth scrollbar-hide">
          {reviewsFiles.map((fileSpecs, index) => (
            <FilePreview
              key={index}
              fileSpecs={fileSpecs}
              src={"files/reviews/"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
