import { css } from "emotion"

export const container = css`
  position: absolute;
  left: inherit;
  top: inherit;
  width: 100%;
  background: #fff;
  border-radius: 3px;
  transform: scale3d(0, 1, 1);
  transition: 0.25s;
  opacity: 0;
  * {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px #0003;
    &:hover {
      background: #0001;
    }
  }
  &.active {
    display: block;
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
`
