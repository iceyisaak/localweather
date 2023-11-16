import { useEffect } from 'react';
import SearchBar from '../SearchBar';
// import WeatherDisplay from '../WeatherDisplay';

import style from './home.module.scss';
import { useAtom } from 'jotai';
import { coordinatesAtom, localityAtom } from '../../features/weather-initialstate';
import WeatherDisplay from '../WeatherDisplay';


const Home = () => {

    const [coordinates] = useAtom(coordinatesAtom)
    const [locality] = useAtom(localityAtom)

    // console.log('locality: ', locality)

    // useEffect(() => {
    //     return
    // }, [coordinates, locality])

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