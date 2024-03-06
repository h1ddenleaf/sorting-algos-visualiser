import PropTypes from "prop-types";
import Slider from "./Slider";

const NavBar = ({ sliders, onSliderChange }) => {
  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    onSliderChange("sizeSlider", value);
  };
  return (
    <div className="nav-bar">
      <Slider value={sliders.sizeSlider} handleChange={handleChange} />
    </div>
  );
};

NavBar.propTypes = {
  sliders: PropTypes.object.isRequired,
  onSliderChange: PropTypes.func.isRequired,
};

export default NavBar;
