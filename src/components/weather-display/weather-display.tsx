
import { useAtom } from 'jotai';
import { IMAGEURL } from '../../api';
import { useGetCurrentWeather } from '../../api/current-weather';
import { currentPositionAtom, tempUnitIDAtom } from '../../features/weather-initialstate';
import { clearCoordinatesAtom } from '../../features/weather-store';
import tempU from '../../tempU.json';


import { IoLocationOutline } from 'react-icons/io5';
import { RiCloseCircleLine } from "react-icons/ri";
import style from './weatherdisplay.module.scss';



export const WeatherDisplay = () => {


    const [currentPosition] = useAtom(currentPositionAtom)
    const [, clearCoordinates] = useAtom(clearCoordinatesAtom)


    const [tempUnitID, setTempUnitID] = useAtom(tempUnitIDAtom)
    const selectedTempUnitName = tempU[tempUnitID].name

    console.log('tempUnitID: ', tempUnitID)

    const { data: weatherData, refetch: refetchWeatherData } = useGetCurrentWeather({ currentPosition, selectedTempUnitName })


    const setTemperatureUnitHandler = async () => {
        setTempUnitID(
            (prevIndex) => {
                return prevIndex + 1 === tempU.length ? 0 : prevIndex + 1
            }
        )
        await Promise.resolve()
        await refetchWeatherData()
    }


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
                <span onClick={setTemperatureUnitHandler}>
                    {weatherData?.main && Math.round(weatherData?.main.temp)}
                    °{tempU[tempUnitID].symbol}
                </span>
            </h1>
        </div>
    );
};