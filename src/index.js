import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import variaveis from './variaveis';
import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px
  }
    
  ul {
    list-style: none;
  }

  a, li {
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
  }

  code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1, h2, h3 {
  font-family: "Playfair Display", serif;
  }

  p {
    font-family: "Montserrat", sans-serif;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"/>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
