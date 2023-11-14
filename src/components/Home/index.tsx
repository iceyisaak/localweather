import { useEffect } from 'react';
import SearchBar from '../SearchBar';
// import WeatherDisplay from '../WeatherDisplay';

import style from './home.module.scss';
import { useAtom } from 'jotai';
import { coordinatesAtom } from '../../features/weather-initialstate';
import WeatherDisplay from '../WeatherDisplay';


const Home = () => {

    const [coordinates] = useAtom(coordinatesAtom)

    useEffect(() => {
        console.log('coordinates: ', coordinates)
    }, [coordinates])



    return (
        <>
            <div className={`${style['Home']}`}>
                <header className={`${style['header']}`}>LocalWeather</header>
                <div className={`${style['container']}`}>
                    {
                        !coordinates ?
                            <SearchBar /> :
                            <WeatherDisplay />
                    }
                </div>
            </div>
        </>
    );
};

export default Home;