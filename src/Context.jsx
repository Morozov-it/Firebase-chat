import React, { createContext, useContext } from 'react';
import { auth } from './firebase-config.js';


//создание контекста
const Context = createContext();

//создание корневого компонента для доступа к его контексту дочерними компонентами
export const DataProvider = ({ children }) => {
    return (
        <Context.Provider value={{
            auth
        }}>{children}</Context.Provider>
    )
};

//функция для получения данных из контекста
export const useData = () => useContext(Context)