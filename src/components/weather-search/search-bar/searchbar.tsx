import { useAtom } from "jotai";
import { ChangeEvent, useRef } from "react";
import { inputFocusAtom, searchTermAtom } from "../../../features/weather-initialstate";

import style from './searchbar.module.scss'

export const SearchBar = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [, setIsInputFocus] = useAtom(inputFocusAtom)
    const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);




    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const location = e.target.value;
        setSearchTerm(location);
    };

    const onFocusHanlder = () => {
        setIsInputFocus(true)
    }

    const onBlurHandler = () => {
        setIsInputFocus(false)
    }



    return (
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
    )
}
