
import { useAtom } from 'jotai';
import { IMAGEURL } from '../../api';
import { getCurrentWeatherByGeolocation, getCurrentWeatherByLocationName } from '../../api/current-weather';
import { coordinatesAtom, localityAtom } from '../../features/weather-initialstate';

import { IoLocationOutline } from 'react-icons/io5';
import { RiCloseCircleLine } from "react-icons/ri";
import { clearCoordinatesAtom } from '../../features/weather-store';
import style from './weatherdisplay.module.scss';



const WeatherDisplay = () => {


    const [coordinates] = useAtom(coordinatesAtom)
    const [locality] = useAtom(localityAtom)
    const [, clearCoordinates] = useAtom(clearCoordinatesAtom)

    const lat = coordinates[0]?.lat
    const lon = coordinates[0]?.lon
    const weatherLocation = locality[0]?.locality

    const { data: dataFromCoords } = getCurrentWeatherByGeolocation({ lat, lon })
    const { data: dataFromSearch } = getCurrentWeatherByLocationName(weatherLocation)



    const resetLocationHandler = () => {
        clearCoordinates()
    }

    return (
        <div className={`${style['WeatherDisplay']}`}>
            <div className={`${style['location']} ${style['location-name']}`}>
                <h3>
                    <IoLocationOutline />
                    {' '}{
                        dataFromCoords?.name ||
                        dataFromSearch?.name
                    },
                    {' '}
                    {
                        dataFromSearch?.sys && dataFromSearch?.sys?.country ||
                        dataFromSearch?.sys && dataFromSearch?.sys?.country
                    } {'    '}
                </h3>
                <RiCloseCircleLine onClick={resetLocationHandler} className={`${'pointer'}`} />
            </div>
            <p className={`${style['description']}`}>
                {
                    dataFromCoords?.weather && dataFromCoords?.weather[0].description ||
                    dataFromSearch?.weather && dataFromSearch?.weather[0].description
                }
            </p>
            <img
                src={`
                ${IMAGEURL}/${dataFromCoords?.weather && dataFromCoords?.weather[0].icon ||
                    dataFromSearch?.weather && dataFromSearch?.weather[0].icon
                    }@2x.png`}
                alt={
                    dataFromCoords?.weather && dataFromCoords?.weather[0].main ||
                    dataFromSearch?.weather && dataFromSearch?.weather[0].main
                }
            />
            <h1 className={`${style['temperature']}`}>
                {
                    dataFromCoords?.main && Math.round(dataFromCoords?.main.temp) ||
                    dataFromSearch?.main && Math.round(dataFromSearch.main.temp)
                }°C
            </h1>
        </div>
    );
};

export default WeatherDisplay;