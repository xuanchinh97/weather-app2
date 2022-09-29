import React, { useState } from 'react'
import { mutations, state } from '../../store'
import style from './Units.module.scss'

function Units({ getData, reRender }) {

  const { setUnits } = mutations;

  const [unit, setUnit] = useState('metric')

  const fetchDataByUnit = async (e, value) => {
    setUnits(state, value)
    setUnit(value)
    await getData(e)
    await reRender()
  }

  return (
    <div className={style.units}>
      <div className={style['btn-group']}>
        <a
          href="/#"
          className={`'btn' ${style.btn} ${unit === 'metric' ? style.isActive : ''}`}
          onClick={(e) => fetchDataByUnit(e, "metric")}
        >
          &deg;C</a>
        <a
          href="/#"
          className={`'btn' ${style.btn} ${unit === 'imperial' ? style.isActive : ''}`}
          onClick={(e) => fetchDataByUnit(e, "imperial")}
        >
          &deg;F</a>
      </div>
    </div>
  )
}

export default Units