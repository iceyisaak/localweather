import { atom } from "jotai";
import { RESET } from "jotai/utils";
import { cPosition, coordinatesAtom, currentPositionAtom } from "./weather-initialstate";



const searchLocation = async (searchTerm: string) => {
    // setIsLoading(true);
};

// export const getCurrentPositionAtom = atom(
//     null,
//     (_, set) => {

//     }
// )


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


export const getCurrentPositionAtom = atom(
    null,
    (_, set, position: GeolocationPosition) => {
        console.log('position: ', position)
        set(coordinatesAtom, saveCoordinates(position))
    }
)



export const clearCoordinatesAtom = atom(
    null,
    (_, set) => {
        set(coordinatesAtom, RESET)
        set(currentPositionAtom, '')
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


