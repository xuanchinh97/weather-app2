const mutations = {
    setURLCurrent(state, value) {
        state.urlCurrent = value;
    },
    setURLOneCall(state, value) {
        state.urlOneCall = value;
    },
    setQuery(state, value) {
        state.parameters.q = value;
    },
    setLat(state, value) {
        state.parameters.lat = value;
    },
    setLon(state, value) {
        state.parameters.lon = value;
    },
    setExclude(state, value) {
        state.parameters.exclude = value;
    },
    setLang(state, value) {
        state.parameters.lang = value;
    },
    setUnits(state, value) {
        state.parameters.units = value;
    },
    setResult(state, value) {
        state.result = value;
    },
    setWeatherCurrent(state, value) {
        state.weather.current = value;
    },
    setWeatherOneCall(state, value) {
        state.weather.onecall = value;
    },
    setError(state, err, value) {
        state.error.err = err;
        state.error.value = value;
    },
    setListSearch(state, value) {
        let id = state.listSearch.indexOf(value);
        if (id === -1) state.listSearch.push(value);
    },
    removeTag(state, value) {
        let id = state.listSearch.indexOf(value);
        state.listSearch.splice(id, 1);
    },
}

export default mutations