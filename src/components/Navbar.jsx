import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routes } from '../routes';



const Navbar = ({ isAuth, setIsAuth }) => {
    const navigate = useNavigate()

    return (
        <Layout.Header>
            <div className="logo" />
            <Menu style={{ justifyContent: 'flex-end' }} theme="dark" mode="horizontal" selectable={false}>
                {isAuth
                    ?
                    <Menu.Item
                        onClick={() => {
                            setIsAuth(false)
                            navigate('/')
                        }}
                        key="1">Log out</Menu.Item>
                    : <Menu.Item onClick={() => navigate(routes.LOGIN)} key="2">Log in</Menu.Item>
                }
            </Menu>
        </Layout.Header>
    )
}

export default Navbar;