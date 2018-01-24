import {css} from 'emotion';

export const container = css`
  color: #fff;
  height: 100vh;
  width: 100vw;
  background: black url('/images/bg_login.jpg') no-repeat 0 -1%;
  background-size: 100% 49%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const boxContainer = css`
  padding: 15px;
  width: 450px;
  height: 420px;
  background: red;
  border-radius: 2px;
  background: #000;
  border: solid 1px #2e2d2d;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const logo = css`
  width: 30vw;
  display: flex;
  flex-direction: center;
  max-width: 200px;
`;

export const item = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const input = css`
  color: rgba(255, 255, 255, 0.8) !important;
  border-bottom: solid 0.08em rgba(255, 255, 255, 0.25) !important;
  font-weight: 600 !important;
  &:hover {
    border-bottom: solid 0.08em rgba(255, 255, 255, 0.6) !important;
  }
  &:focus {
    border-bottom: solid 0.1em rgb(255, 255, 255, 0.8) !important;
  }
`;

export const formClass = css`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  width: 85%;
`;

export const labelClass = css`
  color: #fffa !important;
`;

export const errorStyle = css`
  font-family: serif;
  font-weight: 600;
  text-align: center;
  font-size: 16px;
  color: rgb(255, 45, 45);
`;
