import { useAtom } from 'jotai';
import { currentPositionAtom } from '../../features/weather-initialstate';
import SearchBar from '../SearchBar';
import WeatherDisplay from '../WeatherDisplay';

import style from './home.module.scss';


const Home = () => {

    const [coordinates] = useAtom(currentPositionAtom)
    // const [locality] = useAtom(localityAtom)

    console.log('coords-home: ', coordinates)
    // console.log('locality-home: ', locality)


    return (
        <>
            <div className={`${style['Home']}`}>
                <header className={`${style['header']}`}>LocalWeather</header>
                <div className={`${style['container']}`}>
                    {
                        coordinates.length < 1 ?
                            <SearchBar /> :
                            <WeatherDisplay />
                    }
                </div>
            </div>
        </>
    );
};

export default Home;