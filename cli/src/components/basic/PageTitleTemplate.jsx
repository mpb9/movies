import PropTypes from "prop-types";
PageTitleTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default function PageTitleTemplate(props) {
  return (
    <h1
      className="pt-4 pb-3 text-6xl font-black cursor-default xl:pt-5 xl:pb-4"
      style={{ color: `var(--${props.color}` }}
    >
      {props.title}
    </h1>
  );
}
