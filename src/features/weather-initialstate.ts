import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { CurrentPosition } from "../types/location";
import { TemperatureUnit } from "../types/temperature-unit";



export const currentPositionAtom = atomWithStorage<CurrentPosition[]>('weather-location', [])
export const searchTermAtom = atom('')
export const temperatureUnitAtom = atomWithStorage<TemperatureUnit[]>('temp-unit', [])
export const tempUnitIDAtom = atomWithStorage('tempUnitID', 0)
