 const settings  = {
    key_api: "6801ae848371a19c0a769a98525a9dfb",
    urlCurrent: "https://api.openweathermap.org/data/2.5/weather",
    urlOneCall: "https://api.openweathermap.org/data/2.5/onecall",
    parameters: {
        q: "",
        lat: null,
        lon: null,
        exclude: "",
        lang: "vi",
        units: "metric", // metric C -imperial F
        appid: "6801ae848371a19c0a769a98525a9dfb",
    },
    weather: {
        current: null,
        onecall: null,
    },
    error: {
        err: false,
        value: null,
    },
    listSearch: ["ha noi", "ho chi minh", "ninh binh"],
};

export default settings