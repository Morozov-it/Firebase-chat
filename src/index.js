import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import './firebase-config.js';

const Context = createContext()



ReactDOM.render(
  <Context.Provider value={{}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>,
  document.getElementById('root')
);
