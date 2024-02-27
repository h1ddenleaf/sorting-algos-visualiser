import React from "react";
import { randInt } from "../util/VisualiserHelpers";
import "./Visualiser.css";
import NavBar from "./NavBar";

const NUMBER_OF_BARS = 80;

const PRIMARY_COLOR = "turquoise";

export default class Visualiser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      array.push(randInt(5, 700));
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;
    return (
      <div className="array-container">
        <NavBar />
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: `${100 / NUMBER_OF_BARS}%`,
            }}
          ></div>
        ))}
      </div>
    );
  }
}
