import React, { useState } from 'react'
import { actions, getters, mutations, state } from '../../store'
import Navbar from '../Navbar'
import WeatherContainer from '../WeatherContainer'


function Main() {
    const { getLat, getLon } = getters
    const { fetchDataWeather } = actions
    const { setQuery } = mutations

    const [city, setCity] = useState("")
    const [show, setShow] = useState(false)
    const [render, setRender] = useState(true)

    const reRender = () => {
        setRender(!render)
    }

    //vị trí hiện tại
    function getLocationCurrent() {
        let lon;
        let lat;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                lon = position.coords.longitude;
                lat = position.coords.latitude;
                await fetchDataWeather(state, { lat, lon })
                reRender()
                setShow(true)
            });
            return;
        }
    }

    // vị trí nhập
    const getData = async (e) => {
        e.preventDefault()
        setQuery(state, city)
        let lat = getLat(state)
        let lon = getLon(state)
        await fetchDataWeather(state, { lat, lon })
        reRender()
        setShow(true)
    }

    return (
        <main className='main-container'>
            <Navbar
                reRender={reRender}
                setCity={setCity}
                getData={getData}
                getLocationCurrent={getLocationCurrent} />
            {
                show &&
                <div>
                    <WeatherContainer />
                </div>
            }
            {!show &&
                <div className='container py-0'>
                    <p className='mb-0'>Hãy nhập địa điểm bạn muốn vào ô tìm kiếm.</p>
                </div>
            }
        </main>
    )
}

export default Main