import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BASEURL, appID } from "."
import { CurrentWeather } from "../types/current-weather"
import { GeoCode } from "../types/geocode"
import { type CurrentPosition } from "../types/location"


type useGetCurrentWeather = {
    currentPosition: CurrentPosition[],
    selectedTempUnitName?: string
}


export const useGetCurrentWeather = ({ currentPosition, selectedTempUnitName }: useGetCurrentWeather) => {

    const { lat, lon, locationName } = currentPosition[0]
    let unit = selectedTempUnitName;

    const queryUnit = `&units=${unit}`;
    const APINAME = 'weather'
    const DATA_ENDPOINT = 'data/2.5'

    let APIURL = ''

    if (!locationName) {
        const geolocation = `?lat=${lat}&lon=${lon}`
        APIURL = `${BASEURL}/${DATA_ENDPOINT}/${APINAME}${geolocation}${queryUnit}${appID}`
    } else {
        const queryLocation = `?q=${locationName}`;
        APIURL = `${BASEURL}/${DATA_ENDPOINT}/${APINAME}${queryLocation}${queryUnit}${appID}`
    }

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = response.data
            return data as CurrentWeather
        }
    })

}



type useGetDirectGeoCode = {
    locationName: string
}

export const useGetDirectGeoCode = (locationName: string) => {

    const APINAME = 'geo-direct'
    const API_GEOENDPOINT = 'geo/1.0/direct'
    const queryLocation = `?q=${locationName}`
    const queryLimit = `&limit=5`
    const APIURL = `${BASEURL}/${API_GEOENDPOINT}${queryLocation}${queryLimit}${appID}`


    return useQuery({
        queryKey: [APINAME, locationName],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = response.data
            return data as GeoCode
        },
        enabled: locationName !== undefined && locationName !== ''
    })
}

