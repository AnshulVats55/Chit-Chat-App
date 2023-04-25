  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  import { createTheme } from "@mui/material";
  import { ThemeProvider } from '@emotion/react';

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

       }

     },




   typography: {

       fontFamily: ['Poppins','sans-serif',]
    },



 borderRadius: {

       primary: '20px',

       secondary:'10px'

  }

});

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider> 
  );
