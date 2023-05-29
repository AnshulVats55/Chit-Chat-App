import React from 'react';
import AllRoutes from './components/Routes/AllRoutes';
import { theme } from '../src/theme/Theme';
import store from '../src/store/index';
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

function App() {
    return (
        <ChakraProvider>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <AllRoutes />
                    </PersistGate>
                </Provider>
            </ThemeProvider>
        </ChakraProvider>
        
    );
}

export default App;

