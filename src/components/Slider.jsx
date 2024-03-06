import PropTypes from "prop-types";
import "./Slider.css";

const Slider = ({ value, handleChange, text }) => {
  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    handleChange(value);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="10"
        max="200"
        value={value}
        onChange={handleSliderChange}
        className="slider"
      />
      <p className="slider-value">{text}</p>
    </div>
  );
};

// PropTypes validation
Slider.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Slider;
