import { atomWithStorage } from "jotai/utils";
import { CurrentPosition } from "../types/location";
import { atom } from "jotai";



export const coordinatesAtom = atomWithStorage<CurrentPosition[] | []>('geolocation', [])
export const searchTermAtom = atom('')