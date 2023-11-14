import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { APIKEY, BASEURL, appID, queryUnit } from "."
import { CurrentWeather } from "../types/current-weather"




export const getCurrentWeatherByGeolocation = (coordinates?: GeolocationResponse) => {

    const lat = coordinates?.coords.latitude
    const lon = coordinates?.coords.longitude

    const APINAME = 'weather'
    const geolocation = `?lat=${lat}&lon=${lon}`
    const APIURL = `${BASEURL}/${APINAME}${geolocation}${queryUnit}${appID}`
    console.log('APIURL: ', APIURL)


    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = response.data
            console.log('Weather By Geolocation: ', data)
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
