import React from 'react'
import CurrentWeather from '../../components/CurrentWeather'
import DailyWeather from '../../components/DailyWeather'
import Location from '../../components/Location'
import ShowError from '../../components/ShowError'
import style from './WeatherContainer.module.scss'
import { getters, state } from '../../store'

function WeatherContainer() {
    const { getElementError, getQuery } = getters

    return (
        <div className={`${style['weather-container']}  py-4`}>
            <div className='container'>
                {getElementError(state).err && <ShowError getQuery={getQuery} />}
                <Location />
                <CurrentWeather />
                <DailyWeather />
            </div>
        </div>
    )
}

export default WeatherContainer