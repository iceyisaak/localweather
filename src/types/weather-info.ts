import { CurrentWeather } from "./current-weather"

export type WeatherInfoContext = {
    isLoading: boolean,
    errorInfo: {
        statusCode: string,
        statusMessage: string
    },
    weatherData: CurrentWeather,
    searchLocation: (searchTerm: string) => void,
    hasLocation: boolean,
    getCoords: () => void,
    resetLocation: () => void,
}
