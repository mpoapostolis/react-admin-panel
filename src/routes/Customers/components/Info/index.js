import React from "react"
import { container, imgCont, nameCont, boxCont } from "./css"

function Box(props) {
  const { name, total } = props
  return (
    <div className={boxCont}>
      <div>{total}</div>
      <div>{name}</div>
    </div>
  )
}

function Info(props) {
  const { first_name, id } = props.currentCustomer
  console.log(props.currentCustomer)
  return (
    <div className={container}>
      <div className={imgCont}>
        <img src="/images/img_avatar.png" alt="" />
        <div>{id}</div>
        <div className={nameCont}>{first_name}</div>
      </div>

      <Box name="mpla" total={500} />
      <Box name="mpla" total={500} />
      <Box name="mpla" total={500} />
      <Box name="mpla" total={500} />

      <div className={nameCont}>mpla mplma mpla</div>
      <div className={nameCont}>mpla mplma mpla</div>
      <div className={nameCont}>mpla mplma mpla</div>
    </div>
  )
}

Info.propTypes = {}

export default Info
