import { css } from "emotion"
import { mq } from "../css"

export const layout = css`
  display: grid;
  overflow-x: hidden;
  height: 100vh;
  grid-template-areas:
    "sidebar header header header"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main";
  grid-template-columns: 205px repeat(3, 1fr);
  grid-template-rows: 60px repeat(3, 1fr);
  transition: 0.25s;
  width: calc(100vw + 205px);
  transform: translateX(-205px);
  &.active {
    transform: translateX(0);
    width: 100vw;
  }
`

export const sidebar = css`
  position: sticky;
  background: black;
  height: 100%;
  grid-area: sidebar;
  box-shadow: 0 2px 3px 3px #0007;
  ${mq.small(css`
    overflow-x: hidden;
    overflow-y: scroll;
  `)};
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
  padding: 25px;
  background: #f7f7f7;
  ${mq.small(css`
    font-size: xx-small;
  `)};
`
