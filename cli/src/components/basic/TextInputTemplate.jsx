import PropTypes from "prop-types";

TextInputTemplate.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onStateChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  required: PropTypes.bool,
};

export default function TextInputTemplate({
  label,
  value,
  onStateChange,
  placeholder = "",
  color = "green",
  required = false,
}) {
  const textInputContainerCss =
    "flex w-5/6 items-center text-xl gap-2 text-[var(--l-green)] py-1";
  const textInputCss = `px-4 py-1 w-full my-2 rounded-lg border-none outline-none bg-transparent outline-offset-2 focus:border-2 focus:border-transparent focus:text-[var(--white)] transition duration-200`;
  const textInputLabelCss = `mr-4 text-center text-[var(--${color})] font-bold`;

  function handleStateChange(e) {
    onStateChange(e.target.value);
  }

  return (
    <div className={textInputContainerCss} id="textInputContainer">
      <label className={textInputLabelCss} htmlFor={`text-${label}`}>
        {label}:
      </label>
      <input
        className={textInputCss}
        style={{
          boxShadow:
            "3px 3px 10px rgba(0,0,0,1),-1px -1px 6px rgba(255, 255, 255, 0.4)",
        }}
        type="text"
        id={`text-${label}`}
        name={`text-${label}`}
        placeholder={placeholder.length > 0 ? placeholder : label}
        value={value}
        onChange={(e) => handleStateChange(e)}
        autoComplete="off"
        required={required}
      />
    </div>
  );
}
