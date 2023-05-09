import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme } from "@mui/material";
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react';
import store from '../src/store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const theme = createTheme({
    palette:{
        primary: {
            main: '#363a91',
        },
        secondary: {
            main:'#f1f0fa',
        },
        accent: {
            main:'#F0F7FF',
            light:'#f3f9ff',
        },
        warning:{
            main:'#ef5350'
        },
        success:{
            main:'#4caf50'
        }
    },

   typography: {
       fontFamily: ['Poppins','sans-serif',]
    },
});

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate> 
            </Provider>
        </ThemeProvider>
    </ChakraProvider>
);
