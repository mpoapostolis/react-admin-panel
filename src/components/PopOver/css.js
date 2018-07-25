import { css } from "emotion"

export const container = css`
  position: absolute;
  top: 0px;
  background: white;
  box-shadow: 0 0 2px 2px #0004;
  opacity: 0;
  transition: 0.45s;
  transform: rotateY(180deg);
  * {
    padding: 20px;
    border-bottom: solid 1px #0003;
    &:hover {
      background: #0001;
    }
  }
  &.active {
    transform: rotateY(360deg);
    display: block;
    opacity: 1;
  }
`
