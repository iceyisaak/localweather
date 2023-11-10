# WeatherApp
###### ver: Typescript ReactJS
###### 20231110

## This app
1. Shows current weather of the specified location
   
## Features
1. Search for location via text input
2. Search for location via Geolocation input

## How to run this project
1. Download the repo to your machine
2. Make sure you have the `APIKEY` generated from the OpenWeatherMap
3. Create a `.env` file at `/project-folder` then add this line into it:
```
VITE_OPENWEATHERMAP_APIKEY=paste-your-api-key-here
```
1. Run this command in your terminal `npm run dev`
2. The terminal shows which port your localhost runs
3. Enjoy :D


## Sources, Technologies, and Dependencies

### Sources
[Favicon](https://www.svgrepo.com/svg/530233/weather)

### Technologies
- React
- TypeScript
- SCSS
- React Icons
- React Context API
- localStorage
- Geolocation API

### Dependencies
```json
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.10.1"
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
