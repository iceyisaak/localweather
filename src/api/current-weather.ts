import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { APIKEY, BASEURL, appID, queryUnit } from "."
import { CurrentWeather } from "../types/current-weather"
import { type CurrentPosition } from "../types/location"



export const getCurrentWeatherByGeolocation = ({ lat, lon }: CurrentPosition) => {

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



export const getCurrentWeatherByLocationName = (locality: CurrentPosition) => {
    const APINAME = 'weather'
    const locationName = `?q=${locality}`;
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
