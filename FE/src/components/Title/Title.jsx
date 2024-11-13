import "./Title.css";

import PropTypes from "prop-types";
const Title = ({
  text,
  level,
  style = { color: "var(--color-text-primary)", textTransform: "none" },
}) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag
      style={{
        color: style.color,
        fontSize: style.fontSize,
        textTransform: style.textTransform,
      }}
    >
      {text}
    </HeadingTag>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  style: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.string,
    textTransform: PropTypes.oneOf([
      "none",
      "capitalize",
      "uppercase",
      "lowercase",
      "initial",
      "inherit",
    ]),
  }),
};

export default Title;
