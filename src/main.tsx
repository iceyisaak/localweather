import React from 'react';
import { createRoot } from "react-dom/client";
import Home from '../src/components/Home';
import { WeatherInfoContextProvider } from './hooks/WeatherInfoContext';

import './styles/GlobalStyle.scss';

const rootElement = document.getElementById("root")

const root = createRoot(rootElement!)

root.render(
  <React.StrictMode>
    <WeatherInfoContextProvider>
      <Home />
    </WeatherInfoContextProvider>
  </React.StrictMode>
);