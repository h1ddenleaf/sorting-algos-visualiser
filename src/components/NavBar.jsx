import PropTypes from "prop-types";
import Slider from "./Slider";

const NavBar = ({ sliders, onSliderChange }) => {
  const handleSliderChange = (sliderId) => (value) => {
    onSliderChange(sliderId, value);
  };

  return (
    <div className="nav-bar">
      <Slider
        value={sliders.sizeSlider}
        handleChange={handleSliderChange("sizeSlider")}
        text="Size"
      />
      <Slider
        value={sliders.speedSlider}
        handleChange={handleSliderChange("speedSlider")}
        text="Speed"
      />
    </div>
  );
};

NavBar.propTypes = {
  sliders: PropTypes.object.isRequired,
  onSliderChange: PropTypes.func.isRequired,
};

export default NavBar;
