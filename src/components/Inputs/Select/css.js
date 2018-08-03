import { css } from "emotion"

export const container = css`
  position:relative;
  width: 100%;
  height:100%;
}
`

export const labelKlass = css`
  pointer-events: none;
  font-size: medium;
  position: absolute;
  color: rgba(0, 0, 0, 0.45);
  transition: all 0.15s;
  &.notEmpty {
    transform: translate(-0px, -20px);
    font-size: xx-small;
  }
`

export const select = css`
  width: 100%;
  height: 100%;
  font-size: small;
  border: none;
  background: white;
  border-bottom: solid 0.09em rgba(0, 0, 0, 0.25);

  &:hover {
    border-bottom: solid 0.08em rgba(0, 0, 0, 0.6);
  }
  option {
    &:first-child {
      color: #000a;
    }
  }
`
