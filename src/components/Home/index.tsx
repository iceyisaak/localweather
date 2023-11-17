import { useAtom } from 'jotai';
import { currentPositionAtom } from '../../features/weather-initialstate';
import SearchBar from '../SearchBar';
import WeatherDisplay from '../WeatherDisplay';

import style from './home.module.scss';


const Home = () => {

    const [currentPosition] = useAtom(currentPositionAtom)

    return (
        <>
            <div className={`${style['Home']}`}>
                <header className={`${style['header']}`}>LocalWeather</header>
                <div className={`${style['container']}`}>
                    {
                        currentPosition.length < 1 ?
                            <SearchBar /> :
                            <WeatherDisplay />
                    }
                </div>
            </div>
        </>
    );
};

export default Home;