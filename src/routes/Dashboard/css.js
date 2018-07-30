import { css } from "emotion"
import { mq } from "../../css"
export const container = css`
  padding-top: 10px;
  display: grid;
  width: 100%;
  grid-gap: 20px;
  grid-template-rows: repeat(2, 120px) repeat(2, 350px) 150px;
  grid-template-areas:
    "headFilterCont headFilterCont"

  ${mq.small(css`
    grid-template-rows: repeat(7, 1fr);
    grid-template-areas:
      "headFilterCont"
  `)};
`

export const headFilterCont = css`
  border: solid 1px #0001;
  border-radius: 2px;
  justify-content: space-around;
  display: flex;
`
