


const searchLocation = async (searchTerm: string) => {
    // setIsLoading(true);
};


// export const getCoordinatesAtom = atom(
//     null,
//     (get, set) => {
//         set(coordinatesAtom, get(getCoordinates))
//         console.log('coordinatesAtom: ', coordinatesAtom)
//     }
// )




// export const getCoordinatesAtom = atom(
//     null,
//     (_, set, position: GeolocationPosition) => {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 // set(coordinatesAtom, position)
//                 set(coordinatesAtom, position)
//             }
//         )
//         console.log('coordinatesAtom: ', coordinatesAtom)
//     }
// )





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


