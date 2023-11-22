import { useAtom } from 'jotai';
import { currentPositionAtom, tempUnitIDAtom } from '../../features/weather-initialstate';
import { WeatherSearch } from '../weather-search/weather-search';
import { WeatherDisplay } from '../weather-display';

import style from './home.module.scss';
import { useEffect } from 'react';


export const Home = () => {

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
                            <WeatherSearch /> :
                            <WeatherDisplay />
                    }
                </div>
            </div>
        </>
    );
};