import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { APIKEY, BASEURL, appID, queryUnit } from "."
import { cPosition } from "../features/weather-initialstate"
import { CurrentWeather } from "../types/current-weather"




export const getCurrentWeatherByGeolocation = ({ lat, lon }: cPosition) => {

    const APINAME = 'weather'
    const geolocation = `?lat=${lat}&lon=${lon}`
    const APIURL = `${BASEURL}/${APINAME}${geolocation}${queryUnit}${appID}`


    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = response.data
            return data as CurrentWeather
        }
    })

}



export const getCurrentWeatherByLocationName = (searchTerm: string) => {
    const APINAME = 'weather'
    const locationName = `?q=${searchTerm}`;
    const APIURL = `${BASEURL}/${APINAME}/${locationName}/${queryUnit}/${APIKEY}`

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = response.data
            console.log('Weather By Location Name: ', data)
            return data as CurrentWeather
        }
    })
}
