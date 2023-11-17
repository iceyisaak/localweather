import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BASEURL, appID } from "."
import { CurrentWeather } from "../types/current-weather"
import { type CurrentPosition } from "../types/location"


type useGetCurrentWeather = {
    currentPosition: CurrentPosition[],
    selectedTempUnitName?: string
}


export const useGetCurrentWeather = ({ currentPosition, selectedTempUnitName }: useGetCurrentWeather) => {

    const { lat, lon, locationName } = currentPosition[0]
    let unit = selectedTempUnitName;


    const queryUnit = `&units=${unit}`;
    // console.log('unit: ', unit)
    // console.log('queryUnit: ', queryUnit)


    const APINAME = 'weather'
    let APIURL = ''

    if (!locationName) {
        const geolocation = `?lat=${lat}&lon=${lon}`
        APIURL = `${BASEURL}/${APINAME}${geolocation}${queryUnit}${appID}`
    } else {
        const queryLocation = `?q=${locationName}`;
        APIURL = `${BASEURL}/${APINAME}${queryLocation}${queryUnit}${appID}`
    }

    // console.log(APIURL)

    return useQuery({
        queryKey: [APINAME],
        queryFn: async () => {
            const response = await axios.get(APIURL)
            const data: unknown = response.data
            return data as CurrentWeather
        }
    })

}

