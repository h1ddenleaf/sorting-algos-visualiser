import { useState } from "react";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Slider />
    </div>
  );
};

export default NavBar;

function Slider() {
  const [value, setValue] = useState(150); // Initial value of the slider

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="300"
        value={value}
        onChange={handleChange}
      />
      <p>Value: {value}</p>
    </div>
  );
}
