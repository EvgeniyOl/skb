import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider ThemeProvider breakpoints = { [ 'xxxl' ,  'xxl' ,  'xl' ,  'lg' ,  'md' ,  'sm' ,  'xs' ,  'xxs' ] }> 
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);