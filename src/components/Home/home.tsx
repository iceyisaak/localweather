import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { currentPositionAtom, isLoadingAtom, tempUnitIDAtom } from '../../features/weather-initialstate';
import { WeatherDisplay } from '../weather-display';
import { WeatherSearch } from '../weather-search/weather-search';

import LoaderIcon from '../../assets/loader_icon.gif';
import style from './home.module.scss';


export const Home = () => {

    const [currentPosition] = useAtom(currentPositionAtom)
    const [tempUnitID, setTempUnitID] = useAtom(tempUnitIDAtom)
    const [isLoading] = useAtom(isLoadingAtom)


    useEffect(() => {
        if (tempUnitID) {
            setTempUnitID(tempUnitID)
        }
    }, [tempUnitID])



    return (
        <div className={`${style['Home']}`}>
            <header className={`${style['header']}`}>LocalWeather</header>
            <div className={`${style['container']}`}>
                {
                    isLoading ?
                        <img
                            src={LoaderIcon}
                            className={`${style['loader-icon']}`}
                        />
                        :
                        currentPosition.length < 1 ?
                            <WeatherSearch /> :
                            <WeatherDisplay />
                }
            </div>
        </div>
    );
};