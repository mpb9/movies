import PropTypes from "prop-types";

SelectInputTemplate.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      ...PropTypes.object,
    })
  ).isRequired,
  onStateChange: PropTypes.func.isRequired,
  color: PropTypes.string,
  required: PropTypes.bool,
};

export default function SelectInputTemplate({
  label,
  value,
  items,
  onStateChange,
  color = "green",
  required = false,
}) {
  const selectCss = `w-full pl-4 pr-8 py-1.5 my-3 rounded-xl appearance-none border-[1px] border-[var(--l-${color})] cursor-pointer bg-[var(--${color})] text-[var(--white)]`;

  function handleStateChange(e) {
    onStateChange(e);
  }

  return (
    <div className="w-2/5">
      <div className="relative">
        <select
          className={selectCss}
          id={`select-${label}`}
          name={`select-${label}`}
          value={value}
          required={required}
          onChange={handleStateChange}
        >
          {items.map((item) => (
            <option key={item._id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-9 w-8 ml-1 absolute top-[14px] right-1.5 text-[var(--white)]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
    </div>
  );
}
