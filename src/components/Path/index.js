import React from "react"
import * as styles from "./css"

function url(arr, currentPath) {
  const index = arr.indexOf(currentPath)
  const url = arr.slice(0, index + 1).join("/")
  return `/${url}`
}

function Path(props) {
  const paths = window.location.pathname.split("/").filter(e => e)
  const { push } = props.history
  const { container } = styles
  return (
    <div className={container}>
      <p onClick={() => push("/")}>Dashboard </p>
      {paths.map((path, key) => (
        <p onClick={_ => push(url(paths, path))} key={key}>
          {decodeURI(path)}
        </p>
      ))}
    </div>
  )
}

export default Path
