import { useAtom } from 'jotai';
import { coordinatesAtom, localityAtom } from '../../features/weather-initialstate';
import SearchBar from '../SearchBar';
import WeatherDisplay from '../WeatherDisplay';

import style from './home.module.scss';
import { getCurrentWeatherByGeolocation, getCurrentWeatherByLocationName } from '../../api/current-weather';
import { useState } from 'react';


const Home = () => {

    const [coordinates] = useAtom(coordinatesAtom)
    const [locality] = useAtom(localityAtom)
    // const [hideSearchBar, setHideSearchBar] = useState(false)

    // console.log('coordinates: ', coordinates)
    // console.log('locality: ', locality)

    // const { isSuccess: gotWeatherByGeo } = getCurrentWeatherByGeolocation()
    // const { isSuccess: gotWeatherBySearch } = getCurrentWeatherByLocationName()

    // if (gotWeatherByGeo || gotWeatherBySearch) {
    //     setHideSearchBar(true)
    // }


    return (
        <>
            <div className={`${style['Home']}`}>
                <header className={`${style['header']}`}>LocalWeather</header>
                <div className={`${style['container']}`}>
                    {
                        coordinates.length < 1 || locality.length < 1 ?
                            <SearchBar /> :
                            <WeatherDisplay />
                    }
                </div>
            </div>
        </>
    );
};

export default Home;