import { css } from "emotion"

export const container = css`
  display: flex;
  user-select: none;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
`

export const avatar = css`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 25px;
  height: 25px;
  background: transparent;
  margin: 0;
`

export const infoBox = css`
  display: flex;
  width: 150px;
  word-break: none;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  height: 100%;
  cursor: pointer;
`

export const nameLabel = css`
  width: 150px;
  color: #696969;
  font-weight: 600;
`

export const roleLabel = css`
  width: 120px;
  color: #999;
  font-weight: normal;
`

export const menuItem = css`
  width: 200px;
  padding: 15px;
  user-select: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: none;
  background: #fff;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  cursor: pointer;
  border-bottom: solid 1px #0001;
`
export const leftSide = css`
  flex: 1;
  display: flex;
`

export const rightSide = css`
  flex: 3;
`

export const infos = css`
  margin-left: 20px;
  b {
    cursor: pointer;
  }
`
