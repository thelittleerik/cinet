import PropTypes from "prop-types";

const Button = ({ text, onClick, autofocus, id }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black p-3 fs-1 fw-bold button"
      autoFocus={autofocus}
      id={id}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  autofocus: PropTypes.bool,
  id: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  autofocus: false, // Default value for autofocus prop
};

export default Button;
