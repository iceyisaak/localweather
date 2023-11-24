# WeatherApp
###### variant: Typescript ReactJS + Tanstack Query
###### 20231110

## Project Description
This app allows you to:
- Check the current weather of a specific location
- Change the temperature unit (Celsius, Fahrenheit, Kelvin)
   
## Features
1. Search for current weather data of a specific location
  - via text search + Search Suggestion Menu
  - via Geolocation (Coordinates)
2. Changeable temperature unit (Celsius, Fahrenheit, Kelvin)
3. Resettable location input

## Variants on Different Branches
- master: The latest variant
- tanstack-query: Implementation of Tanstack Query (React Query) + Jotai frontend state management
- context-api: The original variant using ContextAPI

## How to run this project
1. Download the repo to your machine
2. Make sure you have the `APIKEY` generated from the OpenWeatherMap
3. Create a `.env` file at `/project-folder` then add this line into it:
```
VITE_OPENWEATHERMAP_APIKEY=paste-your-api-key-here
```
4. Run this command in your terminal `npm run dev`
5. The terminal shows which port your localhost runs
6. Enjoy :D


## Sources, Technologies, and Dependencies

### Sources
- [Favicon](https://www.svgrepo.com/svg/530233/weather)
- [LoaderIcon](https://gifer.com/en/ZZ5H)

### APIs
- [OpenWheatherMap API](https://openweathermap.org/)
  - [Current Weather API](https://openweathermap.org/current)
  - [Geocoding API](https://openweathermap.org/api/geocoding-api)

### Technologies
- React
- TypeScript
- SCSS
- React Icons
- Axios
- React Query
- Jotai
- localStorage API
- Geolocation API

### Dependencies
```json
 "dependencies": {
    "@tanstack/react-query": "^5.8.3",
    "axios": "^1.6.1",
    "jotai": "^2.5.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0"
  },
```

### DevDependencies
```json
 "devDependencies": {
    "@types/node": "^20.4.9",
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "sass": "^1.65.1",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
```
