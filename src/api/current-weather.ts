import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BASEURL, appID, queryUnit } from "."
import { CurrentWeather } from "../types/current-weather"
import { type CurrentPosition } from "../types/location"



export const getCurrentWeatherByGeolocation = ({ lat, lon }: CurrentPosition) => {

    const APINAME = 'weather'
    const geolocation = `?lat=${lat}&lon=${lon}`
    const APIURL = `${BASEURL}/${APINAME}${geolocation}${queryUnit}${appID}`

    return useQuery({
        queryKey: [`${APINAME}-geolocation`],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = response.data
            return data as CurrentWeather
        }
    })

}



export const getCurrentWeatherByLocationName = (searchTerm?: string) => {

    const APINAME = 'weather'
    const locationName = `?q=${searchTerm}`;
    const APIURL = `${BASEURL}/${APINAME}${locationName}${queryUnit}${appID}`


    return useQuery({
        queryKey: [`${APINAME}-search`],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = response.data
            return data as CurrentWeather
        }
    })
}
