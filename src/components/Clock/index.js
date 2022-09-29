import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import style from './Clock.module.scss'

function Clock() {

  const [time, setTime] = useState('')

  useEffect(() => {
    const getTime = () => {
      let d = new Date();
      let hours = d.getHours() + ""
      let minutes = d.getMinutes() + ""
      let secounds = d.getSeconds() + ""

      if (hours.length < 2) hours = "0" + hours
      if (minutes.length < 2) minutes = "0" + minutes
      if (secounds.length < 2) secounds = "0" + secounds

      return `${hours}:${minutes}:${secounds}`
    }

    setInterval(() => {
      setTime(getTime)
    }, 1000)

  }, [time])

  return (
    <div className='mb-4'>
      <div className={style.clock}>
        <div className='d-flex align-items-center'>
          <span>
            <FontAwesomeIcon icon={faClock} />
          </span>
          <span className='ps-4'>{time}</span>
        </div>
      </div>
    </div>
  )
}

export default Clock