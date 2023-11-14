import { atomWithStorage } from "jotai/utils";


export const coordinatesAtom = atomWithStorage<GeolocationPosition | null>('geolocation', null)