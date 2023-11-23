import { useAtom } from "jotai";
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef } from "react";
import { errorMessageAtom, inputFocusAtom, isErrorAtom, searchTermAtom } from "../../features/weather-initialstate";
import { getCoordinatesAtom, searchLocationAtom } from "../../features/weather-store";

import { MdMyLocation } from 'react-icons/md';
import { useGetDirectGeoCode } from "../../api/current-weather";
import style from './searchbar.module.scss';
import { render } from "react-dom";



export const WeatherSearch = () => {

    const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);
    const [isInputFocus, setIsInputFocus] = useAtom(inputFocusAtom)
    const [errorMessage, setErrorMessage] = useAtom(errorMessageAtom)
    const [isError, setIsError] = useAtom(isErrorAtom)
    const [, getCoordinates] = useAtom(getCoordinatesAtom)
    const [, setSearchLocation] = useAtom(searchLocationAtom)
    const inputRef = useRef<HTMLInputElement>(null)

    const { data: searchResultsData } = useGetDirectGeoCode(searchTerm)

    console.log('data-UI: ', searchResultsData)

    // useEffect(()=>{
    //     // showErrorMessage()



    // },[isError])

    const showErrorMessage = (message: string) => {

        setErrorMessage(message)
        const renderMessage = setTimeout(() => {
            setIsError(false)
        }, 3000)
        return () => clearTimeout(renderMessage)
    }

    const searchLocationHandler = (e: FormEvent) => {
        e.preventDefault();
        if (searchTerm === '') {
            setIsError(true)
            return showErrorMessage('Please enter a valid location name.')
        }
        setSearchLocation(searchTerm)
        setSearchTerm('');
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const location = e.target.value;
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
        setIsInputFocus(true)
    }

    const onBlurHandler = () => {
        setIsInputFocus(false)
    }

    const selectLocationHandler = (e: MouseEvent<HTMLParagraphElement>) => {
        const locationName = (e.target as HTMLInputElement).childNodes[0].nodeValue
        const locationState = (e.target as HTMLInputElement).childNodes[1].nodeValue
        const locationCountry = (e.target as HTMLInputElement).childNodes[3].nodeValue

        const selectedLocation = `${locationName}${locationState}, ${locationCountry}`
        setSearchLocation(selectedLocation)
        // console.log('selectedLocation: ', selectedLocation)
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
                    searchTerm !== '' &&
                        isInputFocus &&
                        searchResultsData ?

                        <article className={`${style['search-suggestion-menu']}`}>
                            {
                                searchResultsData.map(
                                    (searchResult) => (
                                        <div
                                            key={searchResultsData.indexOf(searchResult)}
                                        >
                                            <p onMouseDown={selectLocationHandler}>
                                                {searchResult.name}{
                                                    searchResult.state ? `, ${searchResult.state}` : ''
                                                }: {searchResult.country}
                                            </p>
                                        </div>
                                    )
                                )
                            }
                        </article>

                        :
                        null
                }
                <button className={`${style['btn']} ${'pointer'}`}>
                    Check Weather
                </button>
            </div>
            {
                isError &&
                <p className={`${style['error-msg']}`}>
                    {errorMessage}
                </p>
            }
        </form >
    );
};
