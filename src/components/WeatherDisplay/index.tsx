import { IoLocationOutline } from 'react-icons/io5';
import { RiCloseCircleLine } from 'react-icons/ri';
import { useWeatherInfoContext } from "../../hooks/WeatherInfoContext";

import style from './weatherdisplay.module.scss';



const WeatherDisplay = () => {

    const {
        weatherData: {
            name,
            sys,
            weather,
            main
        },
        resetLocation,

    } = useWeatherInfoContext();


    return (
        <div className={`${style['WeatherDisplay']}`}>
            <div className={`${style['location']} ${style['location-name']}`}>
                <h3>
                    <IoLocationOutline />  {name}, {sys && sys.country} {'    '}
                </h3>
                <RiCloseCircleLine onClick={resetLocation} className={`${'pointer'}`} />
            </div>
            <p className={`${style['description']}`}>
                {weather && weather[0].description}
            </p>
            <img
                src={`http://openweathermap.org/img/wn/${weather && weather[0].icon}@2x.png`}
                alt={weather && weather[0].main}
            />
            <h1 className={`${style['temperature']}`}>
                {main && Math.round(main.temp)}°C
            </h1>
        </div>
    );
};

export default WeatherDisplay;