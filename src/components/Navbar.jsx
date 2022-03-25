import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Dropdown, Row  } from 'antd';
import { routes } from 'routes';
import { useData } from 'Context';
import { signOut } from "firebase/auth";
import { UserOutlined, MessageOutlined } from '@ant-design/icons';


const Navbar = () => {
    const { auth, user, changeUser } = useData()
    const navigate = useNavigate()

    const logout = async () => {
        try {
            await signOut(auth)
            changeUser({})
            navigate(routes.LOGIN)
        } catch (error) {
            console.log(error.message)
        }
    }
    const login = () => {
        navigate(routes.LOGIN)
    }
    const signUp = () => {
        navigate(routes.REGISTRATION)
    }

    return (
        <Layout.Header>
            <Row style={{justifyContent:'space-between', height:'100%'}}>
                <div className="logo">
                    <MessageOutlined
                        style={{color:'white', fontSize: '40px'}}
                        onClick={() => navigate(routes.CHAT)} />
                </div>
                <div className='header-row'>
                    {user.uid
                        ? <Dropdown overlay={(
                            <Menu style={{width: '100%', textAlign:'center'}}>
                                <Menu.Item onClick={logout} key="0">quit</Menu.Item>
                                <Menu.Item onClick={login} key="1">edit</Menu.Item>
                            </Menu>)}
                            trigger={['click']}>
                            <div className='email'>
                                {user.email}
                                <div className='img'>
                                    {user.photoURL
                                        ? <img src={user.photoURL} alt=''/>
                                        : <UserOutlined
                                            style={{ color: 'white', fontSize: '22px' }} />
                                    }
                                </div>
                            </div>
                    </Dropdown>
                        : <Menu
                            theme="dark"
                            mode="horizontal"
                            style={{ width: '100%' }}
                            selectable={false}>
                        <Menu.Item style={{marginLeft: 'auto'}} onClick={login} key="2">log in</Menu.Item>
                        <Menu.Item onClick={signUp} key="3">sign up</Menu.Item>
                    </Menu>
                    }
                </div>
            </Row>
        </Layout.Header>
    )
}

export default Navbar;