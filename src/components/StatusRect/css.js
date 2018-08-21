import { css } from "emotion"

export const container = css`
  display: flex;
  width: 50px;
  height: 18px;
  font-size: small;
  border-radius: 2px;
  align-items: center;
  text-transform: capitalize;
  justify-content: center;
  margin-left: 10px;
  background-color: #dc1937;
  color: white;
  &.active {
    background-color: #18d6a2;
  }
`
