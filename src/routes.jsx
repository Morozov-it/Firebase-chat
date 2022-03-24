import Chat from 'pages/Chat';
import Login from 'pages/Login';
import Registration from 'pages/Registration';



export const routes = {
    REGISTRATION: '/registration',
    LOGIN: '/login',
    CHAT: '/',
};

export const publicRoutes = [
    { path: routes.LOGIN, element: <Login /> },
    { path: routes.REGISTRATION, element: <Registration /> }
];

export const privateRoutes = [
    { path: routes.LOGIN, element: <Login /> },
    { path: routes.REGISTRATION, element: <Registration /> },
    { path: routes.CHAT, element: <Chat /> }
];
