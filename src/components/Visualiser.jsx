import React from "react";
import { randArray } from "../util/VisualiserHelpers";
import "./Visualiser.css";
import PropTypes from "prop-types";
import { algorithms, algorithmNames } from "../algorithms/algorithmConsts";

let NUMBER_OF_BARS = 50;

const PRIMARY_COLOR = "turquoise";

export default class Visualiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      generator: null,
      sortingState: null,
      algorithmKey: "bubbleSort",
      selectedAlgorithm: "",
    };
    this.arrayContainerRef = React.createRef();
  }

  componentDidMount() {
    this.resetArray();
  }

  componentDidUpdate(prevProps) {
    if (this.props.sliders.sizeSlider !== prevProps.sliders.sizeSlider) {
      this.resetArray();
    }
  }

  setSortingState(newState) {
    this.setState({ sortingState: newState });
  }

  sort() {
    const { sortingState, generator } = this.state;
    if (sortingState && !sortingState.done) {
      this.setSortingState(generator.next());
    }
  }

  resetArray() {
    const { sliders } = this.props;
    NUMBER_OF_BARS = sliders.sizeSlider;
    const arrayContainer = this.arrayContainerRef.current;
    // set max height of bars to 80vh (from the css file)
    const maxHeight = arrayContainer.clientHeight;
    const array = randArray(NUMBER_OF_BARS, maxHeight);
    this.setState({ array }, () => {
      const selectedAlgorithm = algorithms[this.state.algorithmKey];
      const generator = selectedAlgorithm(this.state.array);
      this.setState({ generator }, () => {
        this.setSortingState(this.state.generator.next());
      });
    });
  }

  render() {
    const { sortingState } = this.state;
    const { result: array = [], colours = {} } = sortingState?.value || {};
    const swapIndices = colours.swapIndices || [];
    const colors = colours.colors || [];

    return (
      <div>
        <div className="array-container" ref={this.arrayContainerRef}>
          {array.map((value, idx) => {
            const colorIndex = swapIndices.indexOf(idx);
            const color =
              colorIndex !== -1 ? colors[colorIndex] : PRIMARY_COLOR;
            return (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: color,
                  height: `${value}px`,
                  width: `${100 / NUMBER_OF_BARS}%`,
                }}
              ></div>
            );
          })}
        </div>
        <div className="algorithm-buttons">
          <button onClick={() => this.sort()}>Sort</button>

          {Object.entries(algorithmNames).map(([key, name]) => (
            <button
              key={key}
              onClick={() => {
                this.setState({ algorithmKey: key });
                this.resetArray();
              }}
              style={{
                backgroundColor:
                  this.state.algorithmKey === key ? "orange" : "white",
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

Visualiser.propTypes = {
  sliders: PropTypes.object,
};
