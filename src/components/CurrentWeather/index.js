import React from 'react'
import getters from '../../store/getters'
import state from '../../store/state'


import style from './CurrentWeather.module.scss'

function CurrentWeather() {

  const getWeatherCurrent = getters.getWeatherCurrent(state)

  const getTemp = () => {
    return getWeatherCurrent ? getWeatherCurrent.main.temp : ""
  }


  const getDescription = () => {
    return getWeatherCurrent ? getWeatherCurrent.weather[0].description : ""
  }

  const getIcon = () => {
    let icon = getWeatherCurrent ? getWeatherCurrent.weather[0].icon : ""
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  const getFellsLike = () => {
    return getWeatherCurrent ? getWeatherCurrent.main.feels_like : ""
  }

  const getTempMin = () => {
    return getWeatherCurrent ? getWeatherCurrent.main.temp_min : ""
  }

  const getWindSpeed = () => {
    return getWeatherCurrent ? getWeatherCurrent.wind.speed : ""
  }

  const getHumidity = () => {
    return getWeatherCurrent ? getWeatherCurrent.main.humidity : ""
  }

  const Visibility = () => {
    return getWeatherCurrent ? getWeatherCurrent.visibility : ""
  }

  const getClouds = () => {
    return getWeatherCurrent ? getWeatherCurrent.clouds.all : ""
  }

  const getSunrise = () => {
    let time = getWeatherCurrent ? getWeatherCurrent.sys.sunrise : ""
    return formatTime(time)
  }

  const getSunset = () => {
    let time = getWeatherCurrent ? getWeatherCurrent.sys.sunset : ""
    return formatTime(time)
  }

  const getDate = () => {
    let dt = getWeatherCurrent ? getWeatherCurrent.dt : ""
    return formatDate(dt)
  }

  const formatDate = (time) => {
    let d = new Date(time * 1000)
    let month = d.getMonth() + 1 + ""
    let day = d.getDate() + ""
    let year = d.getFullYear() + ""
    if (month.length < 2) month = "0" + month
    if (day.length < 2) day = "0" + day

    return `${day}/${month}/${year}`
  }

  const formatTime = (time) => {
    let d = new Date(time * 1000)
    let hours = d.getHours() + ""
    let minutes = d.getMinutes() + ""
    let seconds = d.getSeconds() + ""

    if (hours.length < 2) hours = "0" + hours
    if (minutes.length < 2) minutes = "0" + minutes
    if (seconds.length < 2) seconds = "0" + seconds

    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <div>
      <div className={style['weather-current']}>
        <div className={style.box}>
          <p className={style.heading}>
            Th???i ti???t hi???n t???i [{getDate()}]
          </p>
          <div className='row align-items-center mb-4 mb-sm-0'>
            <div className='col-auto' >
              <div className='d-flex align-items-center' >
                <div className='column'>
                  <img src={getIcon()} alt='current' />
                </div>
                <div className='column'>
                  <p className={`${style['temp']} mb-0`}>{Math.round(getTemp())}&deg;</p>
                </div>
              </div>
            </div>
            <div className='col-auto' >
              <div className='px-0 p-sm-3'>
                <p className='mb-0'>
                  C???m th???y nh?? {Math.round(getFellsLike())}&deg;, c?? <i>{getDescription()}</i>
                  <span className={style['feed-like']} >
                  </span>
                  <span className={style.description}>
                  </span>
                </p>
                <p className='mb-0'>Nhi???t ????? th???p nh???t l?? {Math.round(getTempMin())}&deg;</p>
              </div>
            </div>
          </div>
          <hr className={`mt-0 ${style.line}`} />
          <div className='row'>
            <div className='col-6 col-sm my-2'>
              <p className={`mb-0 ${style.title}`}>T???c ????? gi??</p>
              <p className='mb-0'>{getWindSpeed()} (m/s)</p>
            </div>
            <div className='col-6 col-sm my-2'>
              <p className={`mb-0 ${style.title}`}>????? ???m</p>
              <p className='mb-0'>{getHumidity()} (%)</p>
            </div>
            <div className='col-6 col-sm my-2'>
              <p className={`mb-0 ${style.title}`}>T???m nh??n</p>
              <p className='mb-0'>{Visibility()} (m)</p>
            </div>
            <div className='col-6 col-sm my-2'>
              <p className={`mb-0 ${style.title}`}>C?? m??y</p>
              <p className='mb-0'>{getClouds()} (%)</p>
            </div>
            <div className='col-12 col-sm-auto my-2'>
              <p className='mb-0'>M???t tr???i m???c: {getSunrise()}</p>
              <p className='mb-0'>M???t tr???i l???n: {getSunset()}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
