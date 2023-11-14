
import { useAtom } from 'jotai';
import { IoLocationOutline } from 'react-icons/io5';
import { RiCloseCircleLine } from "react-icons/ri";
import { IMAGEURL } from '../../api';
import { getCurrentWeatherByGeolocation } from '../../api/current-weather';
import { coordinatesAtom } from '../../features/weather-initialstate';
import style from './weatherdisplay.module.scss';



const WeatherDisplay = () => {




    const [coordinates] = useAtom(coordinatesAtom)
    const { data } = getCurrentWeatherByGeolocation(coordinates)

    console.log('data: ', data)

    return (
        <div className={`${style['WeatherDisplay']}`}>
            <h1>WEATHER DISPLAY!!!!!</h1>
            <div className={`${style['location']} ${style['location-name']}`}>
                <h3>
                    <IoLocationOutline />  {data?.name}, {data?.sys && data?.sys?.country} {'    '}
                </h3>
                {/* <RiCloseCircleLine onClick={resetLocation} className={`${'pointer'}`} /> */}
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