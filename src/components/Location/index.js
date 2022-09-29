import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import style from './Location.module.scss'
import Clock from '../Clock'
import { getters, state } from '../../store'

function Location() {

  const { getWeatherCurrent } = getters
  var weatherCurrent = getWeatherCurrent(state)

  return (
    <div className={style.location}>
      <div className="align-items-end row">
        <div className='col'>
          <h2 className={`mb-0 ${style.heading}`}>
            <small>
              <FontAwesomeIcon icon={faHome} />
              <span className='ms-3'>{weatherCurrent ? weatherCurrent.name : ""}, {weatherCurrent ? weatherCurrent.sys.country : ""}</span>
            </small>
          </h2>
        </div>
        <div className='col-auto'>
          <Clock />
        </div>
      </div>
    </div>
  )
}

export default Location