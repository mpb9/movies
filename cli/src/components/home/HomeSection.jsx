import PropTypes from "prop-types";

/**
 * HomeSection component
 * @param {string} name - The name of the section
 * @param {Array} items - The items to display in the section
 * @returns {JSX.Element}
 */
HomeSection.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default function HomeSection({ name, items }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-between w-full h-1/6 text-[#9da598]">
        <h1 className="text-3xl font-black cursor-default">{name}</h1>
        <h1 className="text-3xl font-black cursor-default">{items.length}</h1>
      </div>
      <div className="flex flex-row items-center justify-start w-full h-fit overflow-x-auto">
        {items.map((item, index) => (
          <HomeSectionItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

/**
 * HomeSectionItem component
 * @param {Object} item - The item to display
 * @returns {JSX.Element}
 */
HomeSectionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
function HomeSectionItem({ item }) {
  return (
    <div className="flex flex-col items-center justify-center w-1/4 h-full p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-3/4 object-cover rounded-lg"
      />
      <h1 className="text-xl font-black cursor-default text-[#9da598]">
        {item.name}
      </h1>
    </div>
  );
}
