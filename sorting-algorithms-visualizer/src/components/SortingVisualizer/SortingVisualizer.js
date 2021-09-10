import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Bar from "../Bar/Bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { bubbleSort } from "../../algorithms/BubbleSort";

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
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [running, isRunning] = useState(false);
  const [algorithm, setAlgorithm] = useState("");
  const [steps, setSteps] = useState({ sortingSteps: [], colorSteps: [] });

  useEffect(() => {
    setSteps({
      sortingSteps: generateRandomArray(),
      colorSteps: Array(NUMBER_OF_BARS).fill(UNSORTED_COLOR),
    });
  }, []);

  const generateRandomArray = () => {
    return [...Array(NUMBER_OF_BARS)].map(
      (_) => 50 + Math.ceil(Math.random() * 500)
    );
  };

  const bubbleSortAnimation = async () => {
    const bubbleSortData = bubbleSort(steps.sortingSteps);
    const sorting = bubbleSortData[0];
    const color = bubbleSortData[1];
    isRunning(true);
    setAlgorithm("Bubble sort");

    setSteps({
      sortingSteps: sorting[0],
      colorSteps: color[0],
    });

    for (let i = 1; i < sorting.length; i++) {
      setSteps({
        sortingSteps: sorting[i],
        colorSteps: color[i],
      });

      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    isRunning(false);
  };

  return (
    <Container>
      <ButtonGroup style={buttonGroupStyle}>
        <Button
          onClick={() =>
            setSteps({
              sortingSteps: generateRandomArray(),
              colorSteps: Array(NUMBER_OF_BARS).fill(UNSORTED_COLOR),
            })
          }
          disabled={running}
          variant={BUTTONS_ALGORTIHMS_COLOR}
        >
          New array
        </Button>
        <Button
          onClick={() => bubbleSortAnimation()}
          disabled={running}
          variant={BUTTONS_ALGORTIHMS_COLOR}
        >
          Bubble sort
        </Button>
        <Button
          onClick={() => bubbleSortAnimation()}
          disabled={running}
          variant={BUTTONS_ALGORTIHMS_COLOR}
        >
          Selection sort
        </Button>
        <Button
          onClick={() => bubbleSortAnimation()}
          disabled={running}
          variant={BUTTONS_ALGORTIHMS_COLOR}
        >
          Insertion sort
        </Button>
      </ButtonGroup>
      <Row className="text-center">
        <h5 style={{ color: "white" }}>
          Speed (current update speed: every {speed / 1000}s)
        </h5>
      </Row>
      <ButtonGroup style={{ display: "flex" }}>
        <Button
          onClick={() => setSpeed((1 / 50) * DEFAULT_SPEED)}
          variant={BUTTONS_SPEED_COLOR}
          disabled={running}
        >
          1/50x
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
        <h1>{algorithm}</h1>
      </Row>
    </Container>
  );
};

export default SortingVisualizer;
