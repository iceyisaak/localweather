import { atom } from "jotai";
import { RESET } from "jotai/utils";
import { TemperatureUnit } from "../types/temperature-unit";
import { currentPositionAtom, searchTermAtom, temperatureUnitAtom } from "./weather-initialstate";





const saveLocationName = (locationName: string) => {
    const lat = null
    const lon = null

    return [
        {
            lat,
            lon,
            locationName
        }
    ]
}


const saveCoordinates = (position: GeolocationPosition) => {
    const lat = position?.coords.latitude;
    const lon = position?.coords.longitude;
    const locationName = null

    return [
        {
            lat,
            lon,
            locationName
        }
    ]
}

const setDefaultTemperatureUnit = () => {
    return [
        {
            id: 0,
            name: 'metric',
            symbol: 'C'
        }
    ]
}


const setTemperatureUnit = (tempUnit: TemperatureUnit) => {

    console.log('tempUnit-1: ', tempUnit)
    const { id, name, symbol } = tempUnit

    return [
        {
            id,
            name,
            symbol
        }
    ]
}




export const setTemperatureUnitAtom = atom(
    null,
    (_, set, tempUnit: TemperatureUnit) => {
        console.log('tempUnit-2: ', tempUnit)
        set(temperatureUnitAtom, setTemperatureUnit(tempUnit))
    }
)


export const searchLocationAtom = atom(
    null,
    (_, set, searchTerm: string) => {
        set(currentPositionAtom, saveLocationName(searchTerm))
        set(searchTermAtom, '')
    }
)

export const getCoordinatesAtom = atom(
    null,
    (_, set, position: GeolocationPosition) => {
        set(currentPositionAtom, saveCoordinates(position))
    }
)


export const clearCoordinatesAtom = atom(
    null,
    (_, set) => {
        set(currentPositionAtom, RESET)
        set(temperatureUnitAtom, RESET)
    }
)


