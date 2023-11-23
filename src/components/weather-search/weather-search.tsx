import { useAtom } from "jotai";
import { ChangeEvent, FormEvent, useRef } from "react";
import { searchTermAtom } from "../../features/weather-initialstate";
import { getCoordinatesAtom, searchLocationAtom } from "../../features/weather-store";

import { MdMyLocation } from 'react-icons/md';
import { SearchSuggestionMenu } from "./search-suggestion-menu";
import style from './searchbar.module.scss';
import { useGetDirectGeoCode } from "../../api/current-weather";



export const WeatherSearch = () => {

    const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);
    const [, getCoordinates] = useAtom(getCoordinatesAtom)
    const [, setSearchLocation] = useAtom(searchLocationAtom)
    const inputRef = useRef<HTMLInputElement>(null)

    const { data } = useGetDirectGeoCode(searchTerm)

    console.log('data-UI: ', data)

    const searchLocationHandler = (e: FormEvent) => {
        e.preventDefault();
        if (searchTerm === '') return
        setSearchLocation(searchTerm)
        setSearchTerm('');
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const location = e.target.value;
        console.log('onChangeHandler(): ', location)
        setSearchTerm(location);
    };


    const getCoordinatesHandler = () => {

        // setIsLoading(true)
        navigator.geolocation.getCurrentPosition(
            (position) => {
                getCoordinates(position)
            }
        )
    }

    const onFocusHanlder = () => {
        console.log('onFocusHandler()')
    }

    const onBlurHandler = () => {
        console.log('onBlurHandler()')
    }


    return (
        <form
            onSubmit={searchLocationHandler}
            className={`${style['form']}`}
        >
            <div className={`${style['form-content']}`}>
                <label htmlFor='search' className={`${style['label']}`}>
                    Location Name
                </label>
                <div className={`${style['location-input']}`}>
                    <input
                        ref={inputRef}
                        type='text'
                        name='search'
                        placeholder='e.g. Frankfurt'
                        onChange={onChangeHandler}
                        onFocus={onFocusHanlder}
                        onBlur={onBlurHandler}
                        value={searchTerm}
                        className={`${style['input']}`}
                    />
                    <span>
                        <MdMyLocation
                            onClick={getCoordinatesHandler}
                            title='Get Location Coordinates'
                            className={`${'pointer'} ${style['locator']}`}
                        />
                    </span>
                </div>
                {
                    <SearchSuggestionMenu />
                }
                <button className={`${style['btn']} ${'pointer'}`}>
                    Check Weather
                </button>
            </div>
            {
                //Error.Msg
            }
        </form >
    );
};
