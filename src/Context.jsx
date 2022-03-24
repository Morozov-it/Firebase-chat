import React, { createContext, useContext, useState } from 'react';
import { auth, provider } from './firebase-config.js';


//создание контекста
const Context = createContext();


//создание корневого компонента для доступа к его контексту дочерними компонентами
export const DataProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const changeUser = (newUser) => {
        setUser(()=>({...newUser}))
    }
    return (
        <Context.Provider value={{
            user, changeUser, auth, provider
        }}>{children}</Context.Provider>
    )
};

//функция для получения данных из контекста
export const useData = () => useContext(Context)