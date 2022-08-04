import styled, { keyframes } from "styled-components";

const getAnimationKeyframes = (startAt: number, endAt: number) => keyframes`
  0% {
    width: ${startAt}%;
    height: ${startAt}%;
    opacity: ${1 - startAt / 100};
  }

  100% {
    width: ${endAt}%;
    height: ${endAt}%;
    opacity: ${1 - endAt / 100};
  }
`;

interface SpinnerContainerProps {
  size: number;
}

export const SpinnerContainer = styled.div<SpinnerContainerProps>`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

interface CircleProps {
  startAt: number;
  endAt: number;
  speed: number;
}

export const Circle = styled.div<CircleProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  animation: ${({ startAt, endAt }) => getAnimationKeyframes(startAt, endAt)} ${({ speed }) => speed}s
    linear infinite;
`;
