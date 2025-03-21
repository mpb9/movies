import PropTypes from "prop-types";

CheckboxInputTemplate.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onStateChange: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default function CheckboxInputTemplate({
  label,
  value,
  onStateChange,
  color = "green",
}) {
  const checkboxInputCss = `peer h-6 w-6 cursor-pointer transition-all bg-[var(--d-gray)] appearance-none rounded shadow hover:shadow-md border-2 border-[var(--l-${color})] checked:bg-[var(--${color})] checked:border-[var(--l-${color})]`;
  const checkboxInputLabelCss = `ml-3 cursor-pointer text-[var(--${color})] font-bold pb-[1px]`;

  function handleStateChange(e) {
    onStateChange(e.target.checked);
  }

  return (
    <div className="inline-flex items-center my-3" id="checkboxInputContainer">
      <label
        className="relative flex items-center cursor-pointer"
        htmlFor={`check-${label}`}
      >
        <input
          className={checkboxInputCss}
          type="checkbox"
          id={`check-${label}`}
          name={`check-${label}`}
          checked={value}
          onChange={(e) => handleStateChange(e)}
        />
        <span className="absolute text-[var(--d-gray)] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-12"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </label>
      <label className={checkboxInputLabelCss} htmlFor={`check-${label}`}>
        {label}
      </label>
    </div>
  );
}
