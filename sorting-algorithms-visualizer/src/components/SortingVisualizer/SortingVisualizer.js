import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Bar from "../Bar/Bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Slider from "react-input-slider";
import { bubbleSort } from "../../algorithms/BubbleSort";
import { insertionSort } from "../../algorithms/InsertionSort";
import { selectionSort } from "../../algorithms/SelectionSort";
import { mergeSortAlgorithm } from "../../algorithms/MergeSort";

const NUMBER_OF_BARS = 50;
const DEFAULT_SPEED = 250;
const UNSORTED_COLOR = "#DCDCDC";
const BUTTONS_ALGORTIHMS_COLOR = "danger";

const buttonGroupStyle = {
  marginTop: "10px",
  display: "flex",
  marginBottom: "10px",
};

const textStyle = {
  color: "white",
  marginTop: "50px",
};

const SortingVisualizer = () => {
  const [running, isRunning] = useState(false);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [steps, setSteps] = useState({
    algorithmName: "",
    sortingSteps: [],
    colorSteps: [],
  });

  useEffect(() => {
    setSpeed(
      localStorage.getItem("speed") === null
        ? DEFAULT_SPEED
        : localStorage.getItem("speed")
    );

    setSteps({
      sortingSteps: generateRandomArray(),
      colorSteps: Array(NUMBER_OF_BARS).fill(UNSORTED_COLOR),
    });
  }, []);

  const saveSpeedToLocalStorage = (x) => {
    localStorage.setItem("speed", x);
  };

  const newRandomArray = () => {
    window.location.reload();
  };

  const generateRandomArray = () => {
    const numbers = new Set();

    while (numbers.size !== 50) {
      numbers.add(Math.floor(Math.random() * 500) + 50);
    }

    return Array.from(numbers);
  };

  const animation = (sortAlgorithmFunction) => {
    const data = sortAlgorithmFunction(steps.sortingSteps);

    isRunning(true);
    sortingLoop(data[0], data[1], data[2]);
  };

  const sortingLoop = async (name, sortSteps, colorSteps) => {
    for (let i = 0; i < sortSteps.length; i++) {
      setSteps({
        algorithmName: name,
        sortingSteps: sortSteps[i],
        colorSteps: colorSteps[i],
      });

      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  };

  return (
    <Container>
      <ButtonGroup style={buttonGroupStyle}>
        <Button
          onClick={() => newRandomArray()}
          variant={BUTTONS_ALGORTIHMS_COLOR}
        >
          New array
        </Button>
        <Button
          onClick={() => animation(bubbleSort)}
          disabled={running}
          variant={BUTTONS_ALGORTIHMS_COLOR}
        >
          Bubble sort
        </Button>
        <Button
          onClick={() => animation(insertionSort)}
          disabled={running}
          variant={BUTTONS_ALGORTIHMS_COLOR}
        >
          Insertion sort
        </Button>
        <Button
          onClick={() => animation(selectionSort)}
          disabled={running}
          variant={BUTTONS_ALGORTIHMS_COLOR}
        >
          Selection sort
        </Button>
        <Button
          onClick={() => animation(mergeSortAlgorithm)}
          disabled={running}
          variant={BUTTONS_ALGORTIHMS_COLOR}
        >
          Merge sort
        </Button>
      </ButtonGroup>
      <Row className="text-center">
        <h5 style={{ color: "white" }}>
          Speed (current update speed: every {speed} ms)
        </h5>
      </Row>
      <div align="center">
        <Slider
          axis="x"
          x={speed}
          xmax={1000}
          xmin={10}
          xstep={10}
          onChange={({ x }) => {
            setSpeed(x);
            saveSpeedToLocalStorage(x);
          }}
          disabled={running}
        />
      </div>

      <Row className="justify-content-center">
        {steps.sortingSteps.map((element, index) => (
          <Bar key={index} height={element} color={steps.colorSteps[index]} />
        ))}
      </Row>
      <Row className="text-center" style={textStyle}>
        <h1>{steps.algorithmName}</h1>
      </Row>
    </Container>
  );
};

export default SortingVisualizer;
