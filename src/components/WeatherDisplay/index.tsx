
import { useAtom } from 'jotai';
import { IMAGEURL } from '../../api';
import { getCurrentWeatherByGeolocation } from '../../api/current-weather';
import { coordinatesAtom } from '../../features/weather-initialstate';

import { IoLocationOutline } from 'react-icons/io5';
import { RiCloseCircleLine } from "react-icons/ri";
import { clearCoordinatesAtom } from '../../features/weather-store';
import style from './weatherdisplay.module.scss';



const WeatherDisplay = () => {


    const [coordinates] = useAtom(coordinatesAtom)
    const [, clearCoordinates] = useAtom(clearCoordinatesAtom)

    const lat = coordinates[0]?.lat
    const lon = coordinates[0]?.lon

    const { data } = getCurrentWeatherByGeolocation({ lat, lon })
    // const { data } = getCurrentWeatherByLocationName(searchTermAtom)



    const resetLocationHandler = () => {
        clearCoordinates()
    }

    return (
        <div className={`${style['WeatherDisplay']}`}>
            <div className={`${style['location']} ${style['location-name']}`}>
                <h3>
                    <IoLocationOutline />  {data?.name}, {data?.sys && data?.sys?.country} {'    '}
                </h3>
                <RiCloseCircleLine onClick={resetLocationHandler} className={`${'pointer'}`} />
            </div>
            <p className={`${style['description']}`}>
                {data?.weather && data?.weather[0].description}
            </p>
            <img
                src={`${IMAGEURL}/${data?.weather && data?.weather[0].icon}@2x.png`}
                alt={data?.weather && data?.weather[0].main}
            />
            <h1 className={`${style['temperature']}`}>
                {data?.main && Math.round(data?.main.temp)}°C
            </h1>
        </div>
    );
};

export default WeatherDisplay;