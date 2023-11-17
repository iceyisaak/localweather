
import { useAtom } from 'jotai';
import { IMAGEURL } from '../../api';
import { useGetCurrentWeather } from '../../api/current-weather';
import { currentPositionAtom } from '../../features/weather-initialstate';
import { clearCoordinatesAtom } from '../../features/weather-store';

import { IoLocationOutline } from 'react-icons/io5';
import { RiCloseCircleLine } from "react-icons/ri";
import style from './weatherdisplay.module.scss';



const WeatherDisplay = () => {


    const [currentPosition] = useAtom(currentPositionAtom)
    const [, clearCoordinates] = useAtom(clearCoordinatesAtom)

    console.log('coords: ', currentPosition)

    // const lat = currentPosition[0]?.lat
    // const lon = currentPosition[0]?.lon
    // const locationName = currentPosition[0]?.locationName
    // const { data: weatherData } = useGetCurrentWeather({ lat, lon, locationName })

    const { data: weatherData } = useGetCurrentWeather(currentPosition[0])



    const resetLocationHandler = () => {
        clearCoordinates()
    }

    return (

        <div className={`${style['WeatherDisplay']}`}>
            <div className={`${style['location']} ${style['location-name']}`}>
                <h3>
                    <IoLocationOutline />
                    {' '}{weatherData && weatherData?.name},
                    {' '}{weatherData && weatherData?.sys?.country} {'    '}
                </h3>
                <RiCloseCircleLine onClick={resetLocationHandler} className={`${'pointer'}`} />
            </div>
            <p className={`${style['description']}`}>
                {weatherData?.weather && weatherData?.weather[0].description}
            </p>
            <img
                src={`${IMAGEURL}/${weatherData?.weather && weatherData?.weather[0].icon}@2x.png`}
                alt={weatherData?.weather && weatherData?.weather[0].main}
            />
            <h1 className={`${style['temperature']}`}>
                {weatherData?.main && Math.round(weatherData?.main.temp)}°C
            </h1>
        </div>

    );
};

export default WeatherDisplay;