import React from "react";

import { Circle, SpinnerContainer } from "./Spinner.styled";

const getStartPoint = (index: number, circlesAmount: number) =>
  (index * 100) / circlesAmount;
const getEndPoint = (index: number, circlesAmount: number) =>
  ((index + 1) * 100) / circlesAmount;

interface SpinnerProps {
  circlesAmount?: number;
  size?: number;
  speed?: number;
}

const Spinner: React.FC<SpinnerProps> = ({
  circlesAmount = 3,
  size = 50,
  speed = 1,
}) => {
  return (
    <SpinnerContainer size={size}>
      {new Array(circlesAmount).fill(0).map((_, index) => (
        <Circle
          startAt={getStartPoint(index, circlesAmount)}
          endAt={getEndPoint(index, circlesAmount)}
          speed={speed}
          key={index}
        />
      ))}
    </SpinnerContainer>
  );
};

export default Spinner;
