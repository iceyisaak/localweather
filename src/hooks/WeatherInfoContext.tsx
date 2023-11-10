import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { CurrentWeather } from '../types/current-weather';
import { type WeatherInfoContext } from '../types/weather-info';


const APIKEY = import.meta.env.VITE_OPENWEATHERMAP_APIKEY;


// if (import.meta.env.NODE_ENV !== 'production') {
//   APIKEY = import.meta.env.VITE_OPENWEATHERMAP_APIKEY;
// } else {
//   APIKEY = import.meta.env.OPENWEATHERMAP_APIKEY;
// }




const WeatherInfoContext = createContext<WeatherInfoContext>(null!);

const WeatherInfoContextProvider = ({ children }: { children: ReactNode }) => {


    const [isLoading, setIsLoading] = useState(false);
    const [errorInfo, setErrorInfo] = useState({
        statusCode: '',
        statusMessage: ''
    });
    const [weatherData, setWeatherData] = useState<CurrentWeather>({});
    const [hasLocation, setHasLocation] = useState(false);

    let unit = 'metric';

    const API_ENDPOINT_WEATHER = `https://api.openweathermap.org/data/2.5/weather`;
    const appID = `&appid=${APIKEY}`;
    let queryUnit = `&units=${unit}`;


    const searchLocation = async (searchTerm: string) => {


        if (searchTerm === '') {
            setErrorInfo({
                statusCode: '401',
                statusMessage: 'Please Enter Location'
            });
            return;
        }

        setErrorInfo({
            statusCode: '',
            statusMessage: ''
        });

        setIsLoading(true);
        const city = `?q=${searchTerm}`;
        const response = await fetch(`${API_ENDPOINT_WEATHER}${city}${queryUnit}${appID}`);
        const data = await response.json();

        if (data.cod === 200) {
            setHasLocation(true);
            setWeatherData(data);
            setLocation(data);
            setIsLoading(false);
        } else {
            setErrorInfo({
                statusCode: data.cod,
                statusMessage: data.message
            });
            setIsLoading(false);
        }

    };


    const getCoords = () => {

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition((position) => {
            searchPosition(position);
        });
    };


    const searchPosition = async (position: GeolocationPosition) => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const spot = `?lat=${lat}&lon=${lon}`;

        const response = await fetch(`${API_ENDPOINT_WEATHER}${spot}${appID}`);
        const data = await response.json();
        searchLocation(data.name);
        setIsLoading(false);
    };




    const setLocation = (data: any) => {

        const weatherLocationObj = {
            city: data.name,
            lat: data.coord.lat,
            lon: data.coord.lon
        };

        localStorage.setItem('weatherLocation', JSON.stringify(weatherLocationObj));
    };

    const resetLocation = () => {
        localStorage.removeItem('weatherLocation');
        setHasLocation(false);
        setIsLoading(false);
        setWeatherData({});
        setErrorInfo({
            statusCode: '',
            statusMessage: ''
        });
    };


    useEffect(() => {
        let weatherLocation = JSON.parse(localStorage.getItem('weatherLocation')!);
        if (weatherLocation) {
            searchLocation(weatherLocation.city);
        }
    }, [hasLocation]);



    const WeatherInfoContextValue = {
        weatherData,
        searchLocation,
        isLoading,
        errorInfo,
        hasLocation,
        resetLocation,
        getCoords
    }


    return (
        <WeatherInfoContext.Provider value={WeatherInfoContextValue}>
            {children}
        </WeatherInfoContext.Provider>
    );
};

export const useWeatherInfoContext = () => {
    return useContext(WeatherInfoContext)
}

export { WeatherInfoContext, WeatherInfoContextProvider };
