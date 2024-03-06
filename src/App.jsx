import "./App.css";
import { useState } from "react";
import Visualiser from "./components/Visualiser";
import NavBar from "./components/NavBar";

function App() {
  const [sliderValues, setSliderValues] = useState({
    sizeSlider: 50,
  });
  const handleSliderChange = (sliderId, value) => {
    setSliderValues({ ...sliderValues, [sliderId]: value });
  };
  return (
    <>
      <div className="App">
        <NavBar sliders={sliderValues} onSliderChange={handleSliderChange} />
        <Visualiser sliders={sliderValues} />
      </div>
    </>
  );
}

export default App;
