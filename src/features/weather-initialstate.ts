import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { CurrentPosition } from "../types/location";



export const currentPositionAtom = atomWithStorage<CurrentPosition[]>('weather-location', [])
export const searchTermAtom = atom('')
export const tempUnitIDAtom = atomWithStorage('tempUnitID', 0)
export const inputFocusAtom = atom(false)
