import { css } from "emotion"

export const logo = css`
  display: flex;
  flex-direction: center;
  height: 62px;
  min-width: 100%;
`

export const imageCont = css`
  position: sticky;
  widows: 100%;
  background: url("/images/bg_account.jpeg");
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const avatarInfo = css`
  position: absolute;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gold;
  font-weight: 600;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: #0000009f;
`

export const avatar = css`
  border-radius: 50%;
  border: solid 2px gold;
  width: 100px;
  height: 100px;
`

export const textInfo = css`
  width: 200px;
  text-align: center;
`

export const dl = css`
  width: 100%;
  color: #9b9b9b;
  padding-left: 10px;
  font-size: small;
  border-bottom: solid 1px #fff3;
  &:last-child {
    border: none;
  }
`

export const dd = css`
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  margin-left: -10px;
  height: 40px;
  font-weight: 600;
  padding-left: 20px;
  color: #ffffffcf;
  font-size: normal;
  cursor: pointer;
  transition: 0.125s;
  &:hover {
    color: #ffffffef;
    background-color: #fff1;
  }
  &.active {
    width: calc(100% - 23px);
    border-left: solid 3px #ffd700;
    color: #ffd700;
    background-color: #fff1;
  }
`
