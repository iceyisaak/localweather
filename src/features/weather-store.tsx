import { atom } from "jotai";
import { RESET } from "jotai/utils";
import { currentPositionAtom, searchTermAtom, tempUnitIDAtom } from "./weather-initialstate";





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


const setTemperatureUnitID = (id: number) => {
    return id
}






export const setTemperatureUnitAtom = atom(
    null,
    (_, set, id: number) => {
        set(tempUnitIDAtom, setTemperatureUnitID(id))
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
    }
)

