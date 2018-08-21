import React from "react"
import { header, main, info, container } from "./css"
import Header from "../components/Header"
import Main from "../components/Main"
import Info from "../components/Info"

function Layout(props) {
  return (
    <div className={container}>
      <div className={header}>
        <Header {...props} />
      </div>
      <div className={main}>
        <Main {...props} />
      </div>
      <div className={info}>
        <Info {...props} />
      </div>
    </div>
  )
}

export default Layout
