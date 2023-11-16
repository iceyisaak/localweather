import { atom } from "jotai";
import { RESET } from "jotai/utils";
import { coordinatesAtom, localityAtom, searchTermAtom } from "./weather-initialstate";



export const searchLocalityAtom = atom(
    null,
    (_, set, searchTerm: string) => {
        set(localityAtom, searchLocality(searchTerm))
        set(searchTermAtom, '')
    }
)

export const searchLocality = (locality: string) => {
    return [
        { locality }
    ]
}


const saveCoordinates = (position: GeolocationPosition) => {
    const lat = position?.coords.latitude;
    const lon = position?.coords.longitude;

    return [
        {
            lat,
            lon
        }
    ]
}


export const getCoordinatesAtom = atom(
    null,
    (_, set, position: GeolocationPosition) => {
        set(coordinatesAtom, saveCoordinates(position))
    }
)


export const clearCoordinatesAtom = atom(
    null,
    (_, set) => {
        set(coordinatesAtom, RESET)
        set(localityAtom, RESET)
    }
)


