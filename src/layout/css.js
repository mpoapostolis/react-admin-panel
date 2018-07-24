import { css } from "emotion"
import { mq } from "../css"

export const layout = css`
  display: grid;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  grid-template-areas:
    "sidebar header header header" "sidebar main main main"
    "sidebar main main main" "sidebar main main main";
  grid-template-columns: 0px repeat(3, 1fr);
  &.active {
    grid-template-columns: 175px repeat(3, 1fr);
  }
  grid-template-rows: 60px repeat(3, 1fr);
`

export const sidebar = css`
  position: sticky;
  background: black;
  grid-area: sidebar;
  transform: translateX(-205px);
  &.active {
    transform: translateX(0px);
  }
`

export const header = css`
  position: sticky;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.15);
  grid-area: header;
  width: 100%;
`

export const main = css`
  overflow-y: scroll;
  height: calc(100vh -60px);
  grid-area: main;
  padding: 10px;
  background: #f7f7f7;
  ${mq.small(css`
    font-size: xx-small;
  `)};
`
