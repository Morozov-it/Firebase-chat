import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useData } from 'Context';
import { useAuthState } from 'react-firebase-hooks/auth'
import { privateRoutes, publicRoutes, routes } from 'routes';
import Spinner from './Spinner';


const AppRouter = () => {
    const { auth } = useData()
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return (<Spinner />)
    }
    if (error) {
        return (<h2>some erorr occurred</h2>)
    }
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
            <Route path='*' element={<Navigate to={routes.LOGIN}/>} />
        </Routes>
    )
}

export default AppRouter