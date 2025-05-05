import PropTypes from "prop-types";
/**
 * FilePreview component
 * @param {Object} item - The item to display
 * @returns {JSX.Element}
 */
FilePreview.propTypes = {
  fileSpecs: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string,
  }).isRequired,
  src: PropTypes.string.isRequired,
};
export default function FilePreview({ fileSpecs, src }) {
  const isFeatured = fileSpecs.tags.includes("featured");
  const href = fileSpecs.src ? `${src}${fileSpecs.src}` : fileSpecs.url;

  if (isFeatured) {
    return (
      <div className="flex flex-col group items-center justify-center min-w-[95%] sm:min-w-[60%] md:min-w-[47%] lg:min-w-[42%] xl:min-w-[36%] h-full mr-8 py-4">
        <a
          href={href}
          className="w-full min-h-80 flex items-end shadow-lg grayscale brightness-75 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-100 transition duration-500"
          style={{ backgroundImage: `url(files/img/${fileSpecs.img})` }}
        >
          <div className="absolute w-full flex items-center justify-end bg-[var(--black)]">
            <h2 className="text-3xl pr-4 pb-[3px] text-[#9da598] group-hover:text-[#69d346] font-[100] transition duration-500">
              {fileSpecs.name}
            </h2>
          </div>
        </a>
      </div>
    );
  }
  return (
    <div className="flex flex-col group items-center justify-center min-w-70 md:min-w-80 lg:min-w-100 h-full ml-0 mr-8 py-4">
      <a
        href={href}
        className="w-full min-h-44 md:min-h-52 lg:min-h-56 flex items-end shadow-lg grayscale brightness-75 bg-no-repeat bg-cover bg-center group-hover:grayscale-0 group-hover:brightness-100 transition duration-500"
        style={{ backgroundImage: `url(files/img/${fileSpecs.img})` }}
      >
        <div className="absolute w-full flex items-center justify-end bg-[var(--black)]">
          <h2 className="text-lg md:text-xl lg:text-2xl pr-3 pb-[1px] text-[#9da598] group-hover:text-[#69d346] font-[100] transition duration-500">
            {fileSpecs.name}
          </h2>
        </div>
      </a>
    </div>
  );
}
