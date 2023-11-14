export const APIKEY = import.meta.env.VITE_OPENWEATHERMAP_APIKEY;
export const BASEURL = `https://api.openweathermap.org/data/2.5`;

export let unit = 'metric';

export const appID = `&appid=${APIKEY}`;
export let queryUnit = `&units=${unit}`;

export const IMAGEURL = 'http://openweathermap.org/img/wn'
