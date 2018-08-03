import { css } from "emotion"
import { mq } from "../../css"
export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`

export const btn = css`
  width: 95px;
  height: 34px;
  border-radius: 5px;
  border: none;
  color: white;
  background: #008fd8;
  margin: 10px;
  cursor: pointer;
  &.cancel {
    border: solid 1px rgba(218, 218, 218, 0.79);
    background: white;
    color: #333333;
  }
  ${mq.small(css`
    font-size: xx-small;
    width: 50px;
  `)};
`
export const updateCancel = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const label = css`
  font-size: small;
  color: #6b6b6b;
`

export const scratchCont = css`
  display: flex;
  justify-content: space-between;
  ${mq.large(css`
    flex-direction: column;
  `)};
`

export const col = css`
  border: solid 1px #0003;
  margin: 0 5px 0 5px;
  box-shadow: 1px 1px 1px 1px #8888882f;
  border-radius: 2px;
  width: calc(100% - 10px);
  color: #333333;
  legend {
    color: #4b4b4b;
    text-transform: capitalize;
    font-size: large;
    font-weight: 600;
  }
`

export const addOfferCont = css`
  user-select: none;
  width: 30%;
  ${mq.small(css`
    width: 100%;
  `)};
  cursor: pointer;
  color: #008bcc;
`

export const row = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px 3px 20px 3px;
  &:first-child {
    margin: 0;
  }
`

export const deleteIcon = css`
  display: flex;
  cursor: pointer;
`
