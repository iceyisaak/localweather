export type WeatherInfoContext = {
    isLoading: boolean,
    errorInfo: {
        statusCode: string,
        statusMessage: string
    },
    // weatherData: {
    //     name: string,
    //     sys: {
    //         country: string,
    //     },
    //     weather: [
    //         {
    //             main: string,
    //             description: string,
    //             icon: string
    //         }
    //     ],
    //     main: {
    //         temp: number
    //     }
    // },
    searchLocation: (searchTerm: string) => void,
    hasLocation: boolean,
    getCoords: () => void,
    resetLocation: () => void
}

export type WeatherData = {
    // weatherData: {
    name: string,
    sys: {
        country: string,
    },
    weather: [
        {
            main: string,
            description: string,
            icon: string
        }
    ],
    main: {
        temp: number
    }
    // },
}