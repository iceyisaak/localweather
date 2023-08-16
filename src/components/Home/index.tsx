import { useContext } from 'react';
import SearchBar from '../SearchBar';
import WeatherDisplay from '../WeatherDisplay';

import { WeatherInfoContext } from '../../hooks/WeatherInfoContext';
import style from './home.module.scss';


const Home = () => {


    const {
        hasLocation,
        isLoading
    } = useContext(WeatherInfoContext);

    return (
        <>
            <div className={`${style['Home']}`}>
                <header className={`${style['header']}`}>Weatherapp</header>
                <div className={`${style['container']}`}>
                    {isLoading && <h1>LOADING...</h1>}
                    {!hasLocation ?
                        <SearchBar /> :
                        <WeatherDisplay />
                    }
                </div>
            </div>
        </>
    );
};

export default Home;