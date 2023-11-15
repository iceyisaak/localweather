import { atom } from "jotai";
import { RESET } from "jotai/utils";
import { coordinatesAtom } from "./weather-initialstate";



export const searchLocalityAtom = atom(
    null,
    (_, set, searchTerm: string) => {
        console.log('searchTerm: ', searchTerm)
    }
)


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
    }
)




// const setLocation = (data: any) => {

//     const weatherLocationObj: Location = {
//         city: data.name,
//         lat: data.coord.lat,
//         lon: data.coord.lon
//     };

//     localStorage.setItem('weatherLocation', JSON.stringify(weatherLocationObj));
// };

// const resetLocation = () => {
//     localStorage.removeItem('weatherLocation');
//     setHasLocation(false);
//     setIsLoading(false);
//     setWeatherData({});
//     setErrorInfo({
//         statusCode: '',
//         statusMessage: ''
//     });
// };


// useEffect(() => {
//     let weatherLocation = JSON.parse(localStorage.getItem('weatherLocation')!);
//     if (weatherLocation) {
//         searchLocation(weatherLocation.city);
//     }
// }, []);


