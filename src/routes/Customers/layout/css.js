import { css } from "emotion"
import { mq } from "../../../css"

export const container = css`
  display: grid;
  height: 70vh;
  grid-template-areas:
    "header header header"
    "info main main"
    "info main main"
    "info main main";
  grid-template-columns: 1fr repeat(2, 1.5fr);
  grid-template-rows: 60px repeat(2, 1fr);
  grid-gap: 1em;
  width: 100%;
  ${mq.medium(css`
    grid-template-areas:
      "header header header"
      "info info info"
      "main main main";
  `)};
`

export const header = css`
  padding: 5px;
  background: white;
  border-radius: 5px;
  border: solid 1px #0002;
  grid-area: header;
`

export const info = css`
  padding: 5px;
  background: white;
  border-radius: 5px;
  border: solid 1px #0002;
  grid-area: info;
`

export const main = css`
  padding: 5px;
  background: white;
  border-radius: 5px;
  border: solid 1px #0002;
  grid-area: main;
`
