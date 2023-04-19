import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette:{
    buttonColor: '#3b8df3'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider> 
);
