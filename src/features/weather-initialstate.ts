import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";


// export type coordPosition = [cPosition]

export type cPosition = {
    lat?: number,
    lon?: number
}


export const coordinatesAtom = atomWithStorage<cPosition[] | []>('geolocation', [])
export const currentPositionAtom = atom<GeolocationPosition | ''>('')