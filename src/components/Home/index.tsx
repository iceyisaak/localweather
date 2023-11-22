import { useAtom } from 'jotai';
import { currentPositionAtom, tempUnitIDAtom } from '../../features/weather-initialstate';
import SearchBar from '../SearchBar';
import WeatherDisplay from '../WeatherDisplay';

import style from './home.module.scss';
import { useEffect } from 'react';


const Home = () => {

    const [currentPosition] = useAtom(currentPositionAtom)
    const [tempUnitID, setTempUnitID] = useAtom(tempUnitIDAtom)


    useEffect(() => {
        if (tempUnitID) {
            setTempUnitID(tempUnitID)
        }
    }, [tempUnitID])


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