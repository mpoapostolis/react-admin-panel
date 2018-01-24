import React from 'react';
import * as styles from './css';

/**
 * @param {string} name     Name of chip
 * @param {fuction} remove  Fn that removes current chip from array of chips
 * @param {string} field    Field recognize what to remove on redux-state
 */
function Chip({name = 'whatever', remove, field}) {
  const {chipCont, btn} = styles;
  return (
    <div className={chipCont}>
      <span>{name}</span>
      <button className={btn} onClick={e => remove({[field]: name})} />
    </div>
  );
}

export default Chip;
