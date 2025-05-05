import PropTypes from "prop-types";
import FilePreview from "../FilePreview";

/**
 * HomeSection component
 * @param {string} name - The name of the section
 * @param {Array} files - The files to display in the section
 * @returns {JSX.Element}
 */
HomeSection.propTypes = {
  name: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      src: PropTypes.string,
      url: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      date: PropTypes.string,
    })
  ).isRequired,
  src: PropTypes.string.isRequired,
};
export default function HomeSection({ name, files, src }) {
  const isFeatured = name == "Featured";
  const isClassics = name == "Classics";
  const isArchive = name == "Archive";

  if (isArchive) {
    return (
      <div className="flex flex-col w-full pb-4">
        <div className="flex flex-row items-center justify-between w-full text-4xl font-[200] italic tracking-widest">
          <h1>
            <a
              href={`/${name.toLowerCase()}`}
              className="text-[#69d34688] group hover:text-[#69d346] hover:font-[300] duration-300"
            >
              ____
              <i className="pl-2 pr-1 text-[#9da598] group-hover:text-[#69d346] uppercase">
                {name}
              </i>
              ____
            </a>
          </h1>
        </div>
      </div>
    );
  } else if (isClassics) {
    return (
      <div className="flex flex-col w-full pb-4">
        <div className="flex flex-row w-full text-[#9da598] text-4xl font-[100] italic tracking-widest pl-1">
          <h1 className="cursor-default uppercase">
            ____<i className="pl-1 pr-1">{name}</i>____
          </h1>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-fit overflow-x-scroll scroll-smooth">
          {files.map((fileSpecs, index) => (
            <FilePreview key={index} fileSpecs={fileSpecs} src={src} />
          ))}
        </div>
      </div>
    );
  } else if (isFeatured) {
    return (
      <div className="flex flex-col w-full pb-4">
        <div className="flex flex-row items-center justify-start w-full h-fit overflow-x-auto">
          {files.map((fileSpecs, index) => (
            <FilePreview key={index} fileSpecs={fileSpecs} src={src} />
          ))}
        </div>
      </div>
    );
  } else
    return (
      <div className="flex flex-col w-full pb-4">
        <div className="flex flex-row w-full text-4xl font-[100] tracking-widest pl-0">
          <h1>
            <a
              href={`/${name.toLowerCase()}`}
              className="text-[#69d34688] hover:text-[#69d346] uppercase group hover:font-[300] duration-300"
            >
              ____
              <i className="pl-2 pr-1 text-[#9da598] group-hover:text-[#69d346]">
                {name}
              </i>
              ____
            </a>
          </h1>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-fit overflow-x-scroll scroll-smooth">
          {files.map((fileSpecs, index) => (
            <FilePreview key={index} fileSpecs={fileSpecs} src={src} />
          ))}
        </div>
      </div>
    );
}
