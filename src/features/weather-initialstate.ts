import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { CurrentPosition, SearchLocation } from "../types/location";



export const coordinatesAtom = atomWithStorage<CurrentPosition[]>('geolocation', [])
export const searchTermAtom = atom('')
export const localityAtom = atomWithStorage<SearchLocation[]>('geolocation', [])