import PropTypes from "prop-types";

const Button = ({ styles }) => {
  return (
    <div className="action_button">
      <button
        className={`p-2 rounded-3xl ${styles} text-12 font-500 w-[7.5rem] shadow-sm shadow-brightRed transition-opacity duration-500 ease-in-out hover:opacity-70`}
      >
        Get Started
      </button>
    </div>
  );
};

Button.propTypes = {
  styles: PropTypes.string,
};

export default Button;
