
import { MouseEvent } from 'react'
import { GeoCode } from '../../../types/geocode'
import style from './search-suggestion-menu.module.scss'
import { useAtom } from 'jotai'
import { searchLocationAtom } from '../../../features/weather-store'


type SearchSuggestionMenu = {
    data?: GeoCode
}


export const SearchSuggestionMenu = ({ data: searchResultsData }: SearchSuggestionMenu) => {

    const [, setSearchLocation] = useAtom(searchLocationAtom)



    const selectLocationHandler = (e: MouseEvent<HTMLParagraphElement>) => {
        const keyword0 = (e.target as HTMLInputElement)?.childNodes[0]?.nodeValue
        const keyword1 = (e.target as HTMLInputElement)?.childNodes[1]?.nodeValue
        // const keyword2 = (e.target as HTMLInputElement)?.childNodes[2]?.nodeValue
        const keyword3 = (e.target as HTMLInputElement)?.childNodes[3]?.nodeValue
        // const keyword4 = (e.target as HTMLInputElement)?.childNodes[4]?.nodeValue

        const locationName = keyword0
        const locationState = keyword1
        const locationCountry = keyword3

        const selectedLocation = `${locationName}${locationState}, ${locationCountry}`
        setSearchLocation(selectedLocation)
    }

    return (
        <article className={`${style['search-suggestion-menu']}`}>
            {
                searchResultsData?.map(
                    (searchResult) => (
                        <div
                            key={searchResultsData.indexOf(searchResult)}
                        >
                            <p onMouseDown={selectLocationHandler}>
                                {searchResult.name}{
                                    searchResult.state !== undefined
                                        ? `, ${searchResult.state}`
                                        : null
                                }: {searchResult.country}
                            </p>
                        </div>
                    )
                )
            }
        </article>
    )
}