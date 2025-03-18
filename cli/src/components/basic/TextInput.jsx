import PropTypes from "prop-types";

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onStateChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  required: PropTypes.bool,
};

export default function TextInput({
  label,
  value,
  onStateChange,
  placeholder = "",
  color = "green",
  required = false,
}) {
  const textInputContainerCss = "flex w-5/6 items-center text-xl";
  const textInputCss =
    "p-2 w-full my-2 rounded-lg border-[1px] border-[var(--" +
    color +
    ")] bg-[var(--white)] text-[var(--" +
    color +
    ")]";
  const textInputLabelCss =
    "mr-3 text-center text-[var(--" + color + ")] font-bold";

  function handleStateChange(e) {
    onStateChange(e.target.value);
  }

  return (
    <div className={textInputContainerCss}>
      <label className={textInputLabelCss} htmlFor={label}>
        {label}
      </label>
      <input
        className={textInputCss}
        type="text"
        id={label}
        name={label}
        placeholder={placeholder.length > 0 ? placeholder : label}
        value={value}
        onChange={(e) => handleStateChange(e)}
        required={required}
      />
    </div>
  );
}
