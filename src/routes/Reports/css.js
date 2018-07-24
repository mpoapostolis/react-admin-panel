import { css } from "emotion"

export const overviewCont = css`
  width: 100%;
  height: 120px;
  border: solid 1px #d4d4d4;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`

export const overviewItem = css`
  border-right: solid 1px #d4d4d4;
  width: 100%;
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content: space-around;
  &:last-child {
    border: none;
  }
`

export const valueOfOverviewItem = css`
  font-size: xx-large;
  font-weight: 600;
`

export const infoOfOverviewItem = css`
  color: #6b6b6b;
`

export const reportsFilters = css`
  margin-bottom: 30px;
  height: 30px;
  flex-wrap: nowrap;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const select = css`
  padding: 4px;
  margin: 0 15px 0 5px;
  border-radius: 2px;
  border: solid 1px #0000003f;
  background: white;
  color: #555555;
  text-align: right;
  option {
    text-align: center;
  }
`

export const btn = css`
  width: 80px;
  cursor: pointer;
  height: 30px;
  border-radius: 2px;
  border: solid 1px #dae0e7;
  background-color: #ffffff;
  color: #999999;
  &.active {
    border: none;
    background-color: #000000;
    color: #ffffff;
  }

  &:first-child {
    margin-left: 40px;
  }

  &:last-child {
    margin-right: 40px;
  }
`

export const label = css`
  color: #717171;
`

export const input = css`
  margin: 0 15px 0 5px;
  padding: 3px;
  text-align: right;
  border-radius: 2px;
  border: solid 1px #0000003f;
  background: white;
  color: #555555;
`
