import React, { createContext, useContext } from 'react';
import { auth, db } from './firebase-config.js';


//создание контекста
const Context = createContext();

//создание корневого компонента для доступа к его контексту дочерними компонентами
export const DataProvider = ({ children }) => {
    return (
        <Context.Provider value={{
            auth, db
        }}>{children}</Context.Provider>
    )
};

//функция для получения данных из контекста
export const useData = () => useContext(Context)