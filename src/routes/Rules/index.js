import React, { Component } from "react"
import Select from "../../components/Inputs/Select"
import { TYPE_OPTS, VALIDITY_OPTS, GROUPS } from "./utils"
import {
  scratchCont,
  col,
  header,
  btn,
  label,
  addOfferCont,
  updateCancel,
  row,
  deleteIcon
} from "./css"

/**
 * @prop {function} addOffer
 * @prop {string} type
 */
function AddOffer({ addOffer, type }) {
  return (
    <p type={type} onClick={addOffer} className={addOfferCont}>
      + Add offer
    </p>
  )
}

/**
 * @prop {function} onSave
 * @prop {function} onCancel
 * @prop {string} type
 */
function UpdateCancel({ onSave, type, onCancel }) {
  return (
    <div className={updateCancel}>
      <button type={type} onClick={onCancel} className={`${btn} cancel`}>
        Cancel
      </button>
      <button onClick={onSave} className={btn}>
        Update
      </button>
    </div>
  )
}

class ScratchAndWind extends Component {
  state = {
    group1: [{ type: "", amount: "", validity: "" }],
    group2: [],
    group3: []
  }

  handleAddOffer = ({ currentTarget }) =>
    this.setState(s => {
      const type = currentTarget.getAttribute("type")
      const emptyOffer = { type: "", amount: "", validity: "" }
      const tmpArr = Array.from(s[type])
      tmpArr.push(emptyOffer)
      return { [type]: tmpArr }
    })

  handleDelete = ({ currentTarget }) =>
    this.setState(s => {
      const type = currentTarget.getAttribute("type")
      const index = +currentTarget.getAttribute("index")
      const tmpArr = Array.from(s[type])
      tmpArr.splice(index, 1)
      return { [type]: tmpArr }
    })

  handleCancel = ({ currentTarget }) =>
    this.setState(() => {
      const type = currentTarget.getAttribute("type")
      return { [type]: [] }
    })

  /**
   * @prop {string} value
   * @prop {string} type
   * @prop {number} index
   * @prop {scratchType} index
   */
  handleChage = ({ value, type, index, scratchType }) =>
    this.setState(s => {
      const tmpArr = Array.from(s[scratchType])
      tmpArr[index] = Object.assign(tmpArr[index], { [type]: value }, {})
      return { [scratchType]: tmpArr }
    })

  render() {
    return (
      <main>
        <header className={header}>
          <div>
            <h2>Group Rules</h2>
            <label className={label}>Change Group Rules</label>
          </div>
          <button className={btn}>Update All</button>
        </header>

        <div className={scratchCont}>
          {GROUPS.map((type, typeKey) => {
            const show = this.state[type].length < 4
            return (
              <fieldset key={typeKey} className={col}>
                <legend>{type}</legend>
                {this.state[type].map((obj, colKey) => (
                  <div className={row} key={colKey}>
                    <Select
                      currentValue={obj.type}
                      handleSelect={value =>
                        this.handleChage({
                          value,
                          type: "type",
                          index: colKey,
                          scratchType: type
                        })
                      }
                      label={"Type"}
                      options={TYPE_OPTS}
                    />
                    &nbsp;
                    <Select
                      currentValue={obj.validity}
                      handleSelect={value =>
                        this.handleChage({
                          value,
                          type: "validity",
                          index: colKey,
                          scratchType: type
                        })
                      }
                      label={"Validity"}
                      options={VALIDITY_OPTS}
                    />
                    &nbsp;
                    <img
                      type={type}
                      index={colKey}
                      onClick={this.handleDelete}
                      className={deleteIcon}
                      src="/images/red-delete.png"
                      alt="X"
                    />
                  </div>
                ))}
                {show ? (
                  <AddOffer addOffer={this.handleAddOffer} type={type} />
                ) : null}
                <UpdateCancel
                  type={type}
                  onCancel={this.handleCancel}
                  onSave={void 0}
                />
              </fieldset>
            )
          })}
        </div>
      </main>
    )
  }
}

export default ScratchAndWind
