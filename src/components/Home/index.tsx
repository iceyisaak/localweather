import { useAtom } from 'jotai';
import { coordinatesAtom, localityAtom } from '../../features/weather-initialstate';
import SearchBar from '../SearchBar';
import WeatherDisplay from '../WeatherDisplay';

import style from './home.module.scss';


const Home = () => {

    const [coordinates] = useAtom(coordinatesAtom)
    const [locality] = useAtom(localityAtom)


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