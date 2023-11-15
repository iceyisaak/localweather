import { ChangeEvent, FormEvent, useState } from "react";
import { MdMyLocation } from 'react-icons/md';

import { useAtom } from "jotai";
import { getCoordinatesAtom } from "../../features/weather-store";
import style from './searchbar.module.scss';



const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [, getCoordinates] = useAtom(getCoordinatesAtom)


    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('onSubmit()')
        setSearchTerm('');
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const location = e.target.value;
        setSearchTerm(location);
    };


    const getCoordinatesHandler = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                getCoordinates(position)
            }
        )
    }


    return (
        <form
            onSubmit={onSubmit}
            className={`${style['form']}`}
        >
            <div className={`${style['form-content']}`}>
                <label htmlFor='search' className={`${style['label']}`}>
                    Search City
                </label>
                <div className={`${style['location-input']}`}>
                    <input
                        type='text'
                        name='search'
                        placeholder='e.g. Frankfurt'
                        onChange={onChangeHandler}
                        value={searchTerm}
                        className={`${style['input']}`}
                    />
                    <span>
                        <MdMyLocation
                            onClick={getCoordinatesHandler}
                            className={`${'pointer'} ${style['locator']}`}
                        />
                    </span>
                </div>
                <button className={`${style['btn']} ${'pointer'}`}>
                    Check Weather
                </button>
            </div>

        </form >
    );
};

export default SearchBar;