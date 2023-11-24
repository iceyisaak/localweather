import { useAtom } from "jotai";
import { FormEvent } from "react";
import { useGetDirectGeoCode } from "../../api/current-weather";
import { errorMessageAtom, inputFocusAtom, isErrorAtom, isLoadingAtom, searchTermAtom } from "../../features/weather-initialstate";
import { getCoordinatesAtom, searchLocationAtom } from "../../features/weather-store";
import { SearchBar } from "./search-bar/searchbar";
import { SearchSuggestionMenu } from "./search-suggestion-menu";

import { MdMyLocation } from 'react-icons/md';
import style from './weather-search.module.scss';



export const WeatherSearch = () => {

    const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);
    const [isInputFocus] = useAtom(inputFocusAtom)
    const [errorMessage, setErrorMessage] = useAtom(errorMessageAtom)
    const [isError, setIsError] = useAtom(isErrorAtom)
    const [, setIsLoading] = useAtom(isLoadingAtom)
    const [, getCoordinates] = useAtom(getCoordinatesAtom)
    const [, setSearchLocation] = useAtom(searchLocationAtom)

    const { data: searchResultsData } = useGetDirectGeoCode(searchTerm)



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


    const getCoordinatesHandler = () => {
        setIsLoading(true)
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setIsLoading(false)
                getCoordinates(position)
            }
        )
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
                    <SearchBar />
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
                        searchResultsData &&
                        searchResultsData!.length > 0 ?
                        <SearchSuggestionMenu
                            data={searchResultsData}
                        />
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
