
import { useAtom } from 'jotai';
import { IMAGEURL } from '../../api';
import { useGetCurrentWeather } from '../../api/current-weather';
import { currentPositionAtom, tempUnitIDAtom } from '../../features/weather-initialstate';
import { clearCoordinatesAtom } from '../../features/weather-store';

import { IoLocationOutline } from 'react-icons/io5';
import { RiCloseCircleLine } from "react-icons/ri";
import style from './weatherdisplay.module.scss';



const tempU = [
    {
        id: 0,
        name: 'metric',
        symbol: 'C'
    },
    {
        id: 1,
        name: 'imperial',
        symbol: 'F'
    },
    {
        id: 2,
        name: 'standard',
        symbol: 'K'
    },
]


const WeatherDisplay = () => {


    const [currentPosition] = useAtom(currentPositionAtom)
    const [, clearCoordinates] = useAtom(clearCoordinatesAtom)


    const [tempUnitID, setTempUnitID] = useAtom(tempUnitIDAtom)
    const selectedTempUnitName = tempU[tempUnitID] && tempU[tempUnitID].name

    // This logs the state correctly everytime
    console.log('selectedTempUnitName: ', selectedTempUnitName)


    const { data: weatherData, refetch } = useGetCurrentWeather({ currentPosition, selectedTempUnitName })


    const setTemperatureUnitHandler = async () => {
        setTempUnitID(
            (prevIndex) => {
                return prevIndex + 1 === tempU.length ? 0 : prevIndex + 1
            }
        )
        await Promise.resolve()
        await refetch()
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

                    {/* This shows old state after a page reload: (State persisted, but delayed by 1 step) */}
                    {weatherData?.main && Math.round(weatherData?.main.temp)}

                    {/* This always renders correctly */}
                    °{tempU[tempUnitID].symbol}
                </span>
            </h1>
        </div>
    );
};

export default WeatherDisplay;