import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Bar from "../Bar/Bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Info from "../Info/Info";
import { bubbleSort } from "../../algorithms/BubbleSort";
import { insertionSort } from "../../algorithms/InsertionSort";
import { selectionSort } from "../../algorithms/SelectionSort";

const NUMBER_OF_BARS = 50;
const DEFAULT_SPEED = 1000;
const UNSORTED_COLOR = "#DCDCDC";
const BUTTONS_SPEED_COLOR = "danger";
const BUTTONS_ALGORTIHMS_COLOR = "primary";

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
      sessionStorage.getItem("speed") === null
        ? DEFAULT_SPEED
        : sessionStorage.getItem("speed")
    );

    setSteps({
      sortingSteps: generateRandomArray(),
      colorSteps: Array(NUMBER_OF_BARS).fill(UNSORTED_COLOR),
    });
  }, []);

  const newRandomArray = () => {
    sessionStorage.setItem("speed", speed);
    window.location.reload();
  };

  const generateRandomArray = () => {
    return [...Array(NUMBER_OF_BARS)].map(
      (_) => 50 + Math.ceil(Math.random() * 500)
    );
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
      </ButtonGroup>
      <Row className="text-center">
        <h5 style={{ color: "white" }}>
          Speed (current update speed: every {speed / 1000}s)
        </h5>
      </Row>
      <ButtonGroup style={{ display: "flex" }}>
        <Button
          onClick={() => setSpeed((1 / 1000) * DEFAULT_SPEED)}
          variant={BUTTONS_SPEED_COLOR}
          disabled={running}
        >
          1/1000x
        </Button>
        <Button
          onClick={() => setSpeed((1 / 8) * DEFAULT_SPEED)}
          variant={BUTTONS_SPEED_COLOR}
          disabled={running}
        >
          1/8x
        </Button>
        <Button
          onClick={() => setSpeed((1 / 4) * DEFAULT_SPEED)}
          variant={BUTTONS_SPEED_COLOR}
          disabled={running}
        >
          1/4x
        </Button>
        <Button
          onClick={() => setSpeed((1 / 2) * DEFAULT_SPEED)}
          variant={BUTTONS_SPEED_COLOR}
          disabled={running}
        >
          1/2x
        </Button>
        <Button
          onClick={() => setSpeed(DEFAULT_SPEED)}
          variant={BUTTONS_SPEED_COLOR}
          disabled={running}
        >
          1x
        </Button>
        <Button
          onClick={() => setSpeed(1.5 * DEFAULT_SPEED)}
          variant={BUTTONS_SPEED_COLOR}
          disabled={running}
        >
          1.5x
        </Button>
        <Button
          onClick={() => setSpeed(2 * DEFAULT_SPEED)}
          variant={BUTTONS_SPEED_COLOR}
          disabled={running}
        >
          2x
        </Button>
      </ButtonGroup>
      <Row className="justify-content-center">
        {steps.sortingSteps.map((element, index) => (
          <Bar key={index} height={element} color={steps.colorSteps[index]} />
        ))}
      </Row>
      <Row className="text-center" style={textStyle}>
        <h1>{steps.algorithmName}</h1>
      </Row>
      <Info />
    </Container>
  );
};

export default SortingVisualizer;
