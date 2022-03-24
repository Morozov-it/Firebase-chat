import Chat from './pages/Chat';
import Login from './pages/Login';



export const routes = {
    LOGIN: '/login',
    CHAT: '/chat',
};

export const publicRoutes = [
    { path: routes.LOGIN, element: <Login /> }
];

export const privateRoutes = [
    { path: routes.LOGIN, element: <Login /> },
    { path: routes.CHAT, element: <Chat /> }
];
