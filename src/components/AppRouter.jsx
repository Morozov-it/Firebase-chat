import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { privateRoutes, publicRoutes } from '../routes';



const AppRouter = ({ isAuth }) => {
    return (
        <Routes>
            {isAuth
                ?
                privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>)
                :
                publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>)
            }
            <Route path='*' element={ <Home />}/>
        </Routes>
    )
}

export default AppRouter