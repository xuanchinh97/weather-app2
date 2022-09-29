import mutations from './mutations.js'

const { setLat, setLon, setWeatherCurrent, setError, setListSearch, setWeatherOneCall } = mutations

const actions = {
    async fetchDataWeather(state, { lat = null, lon = null }) {
        // console.log("state", state)
        let appid = `appid=${state.key_api}`
        let q = `${state.parameters.q}`
        let units = `units=${state.parameters.units}`
        let lang = `lang=${state.parameters.lang}`
        let exclude = `exclude=minutely,hourly,daily`
        let stringAPICurrent = `${state.urlCurrent}?q=${q}&${lang}&${units}&${exclude}&${appid}`

        // console.log({ "stringAPICurrent": stringAPICurrent })

        if (lat && lon) {
            stringAPICurrent += `&lat=${lat}&lon=${lon}`
        }

        await fetch(stringAPICurrent)
            .then(res => res.json())
            .then((data) => {
                // console.log("stringAPICurrent", data)
                if (+data.cod === 200) {
                    setLat(state, data.coord.lat)
                    setLon(state, data.coord.lon)
                    setWeatherCurrent(state, data)
                    setError(state, false, null)
                    if (q) {
                        setListSearch(state, q)
                    }
                } else {
                    setError(state, true, state.parameters)
                }
            })

        let lat02 = `lat=${state.parameters.lat}`
        let lon02 = `lon=${state.parameters.lon}`
        let excludeOneCall = "exclude=current,minutely,hourly"
        let stringAPICall = `${state.urlOneCall}?${lang}&${units}${excludeOneCall}&${appid}&${lat02}&${lon02}`

        await fetch(stringAPICall)
            .then(res => res.json())
            .then(data => {
                // console.log({ "stringAPICall": data })
                setWeatherOneCall(state, data)
            })
    }

}

export default actions
