import { css, keyframes } from "emotion"

const rippleAnim = keyframes`
  100% {
    background: #8f0000 radial-gradient(circle, transparent 60%, #8f0000 60%) center/15000%;
  }
`

export const ripple = css`
  background-position: center;
  width: 100px;
  height: 100px;
  background: #000000;
  &:active {
    animation: ${rippleAnim} 1s ease forwards;
  }
`
