import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useData } from 'Context';
import { useAuthState } from 'react-firebase-hooks/auth'
import { privateRoutes, publicRoutes } from 'routes';


const AppRouter = () => {
    const { auth } = useData()
    const [user] = useAuthState(auth)

    return (
        <Routes>
            {user
                ?
                privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>)
                :
                publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>)
            }
            <Route path='*' element={<h2>Loading...</h2>} />
        </Routes>
    )
}

export default AppRouter