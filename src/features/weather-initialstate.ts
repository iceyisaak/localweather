import { atomWithStorage } from "jotai/utils";



export type cPosition = {
    lat?: number,
    lon?: number
}


export const coordinatesAtom = atomWithStorage<cPosition[] | []>('geolocation', [])