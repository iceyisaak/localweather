import { atom } from "jotai";
import { RESET } from "jotai/utils";
import { coordinatesAtom } from "./weather-initialstate";



const searchLocation = async (searchTerm: string) => {
    // setIsLoading(true);
};


const getCoordinates = (position: GeolocationPosition) => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log('getCoordinates()')
    const coordPosition = [{
        lat,
        lon
    }]
    return coordPosition
}


export const getCoordinatesAtom = atom(
    null,
    (_, set, coordinates: GeolocationPosition) => {
        console.log('coordinates: ', coordinates)
        set(coordinatesAtom, getCoordinates(coordinates))
        console.log('coordinatesAtom: ', coordinatesAtom)
    }
)



export const clearCoordinatesAtom = atom(
    null,
    (_, set) => {
        set(coordinatesAtom, RESET)
    }
)




const searchPosition = async (position: GeolocationPosition) => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherLocation = `?lat=${lat}&lon=${lon}`;

    console.log('weatherLocation: ', weatherLocation)

    // searchLocation(data.name);
    // setIsLoading(false);
};




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


