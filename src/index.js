import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette:{
    primary:{
      main: '#363a91'
    },
    secondary:{
      main:'#f1f0fa'
    }
  },

  typography: {
    fontFamily: ['Roboto','sans-serif',]
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider> 
);
