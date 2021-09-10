import React, { useState, useRef, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Bar from "../Bar/Bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { bubbleSort } from "../../algorithms/BubbleSort";

const SortingVisualizer = () => {
  const currentIndex = useRef(0);
  const [steps, setSteps] = useState({ sortingSteps: [], colorSteps: [] });

  useEffect(() => {
    setSteps({
      sortingSteps: generateRandomArray(),
      colorSteps: Array(steps.sortingSteps.length).fill("#DCDCDC"),
    });
  }, [steps.sortingSteps.length]);

  const generateRandomArray = () => {
    return [...Array(50)].map((_) => 50 + Math.ceil(Math.random() * 500));
  };

  const bubbleSortAnimation = async () => {
    const bubbleSortData = bubbleSort(steps.sortingSteps);
    const sorting = bubbleSortData[0];
    const color = bubbleSortData[1];

    setSteps({
      sortingSteps: sorting[0],
      colorSteps: color[0],
    });

    for (let i = 1; i <= sorting.length; i++) {
      setSteps({
        sortingSteps: sorting[currentIndex.current],
        colorSteps: color[currentIndex.current],
      });

      await new Promise((resolve) => setTimeout(resolve, 5));

      if (currentIndex.current + 1 < sorting.length) {
        currentIndex.current++;
      }
    }
  };

  return (
    <Container fluid>
      <Button
        onClick={() =>
          setSteps({
            sortingSteps: generateRandomArray(),
            colorSteps: Array(steps.sortingSteps.length).fill("#DCDCDC"),
          })
        }
      >
        New array
      </Button>
      <Button onClick={() => bubbleSortAnimation()}>Start/Stop</Button>
      <Row className="justify-content-center">
        {steps.sortingSteps.map((element, index) => (
          <Bar key={index} height={element} color={steps.colorSteps[index]} />
        ))}
      </Row>
    </Container>
  );
};

export default SortingVisualizer;
