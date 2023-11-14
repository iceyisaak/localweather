import { Provider } from 'jotai';
import React from 'react';
import { createRoot } from "react-dom/client";
import Home from '../src/components/Home';


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/GlobalStyle.scss';

const queryClient = new QueryClient

const rootElement = document.getElementById("root")

const root = createRoot(rootElement!)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Home />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);