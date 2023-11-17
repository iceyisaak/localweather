import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BASEURL, appID, queryUnit } from "."
import { CurrentWeather } from "../types/current-weather"
import { type CurrentPosition } from "../types/location"


export const useGetCurrentWeather = (currentPosition: CurrentPosition) => {

    const { lat, lon, locationName } = currentPosition

    const APINAME = 'weather'
    let APIURL = ''

    if (!locationName) {
        const geolocation = `?lat=${lat}&lon=${lon}`
        APIURL = `${BASEURL}/${APINAME}${geolocation}${queryUnit}${appID}`
    } else {
        const queryLocation = `?q=${locationName}`;
        APIURL = `${BASEURL}/${APINAME}${queryLocation}${queryUnit}${appID}`
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

