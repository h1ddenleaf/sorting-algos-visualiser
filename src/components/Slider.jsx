import PropTypes from "prop-types"; // Import PropTypes

function Slider({ value, handleChange }) {
  return (
    <div>
      <input
        type="range"
        min="10"
        max="250"
        value={value}
        onChange={handleChange}
      />
      <p>Value: {value}</p>
    </div>
  );
}

// PropTypes validation
Slider.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Slider;
