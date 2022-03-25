import React, { useState } from 'react';
import { Typography } from 'antd';
import { Card } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes'
import { useData } from 'Context';
import { signInWithRedirect , signInWithEmailAndPassword  } from "firebase/auth";
import UiForm from 'components/UiForm';



const Login = () => {
    const navigate = useNavigate()
    const [isError, setIsError] = useState('')
    const { auth, provider, changeUser } = useData()

    const signIn = async (email, password) => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            changeUser(user)
            navigate(routes.CHAT)
        } catch (error) {
            setIsError(error.message)
        }
    }

    const signInGoogle = async () => {
        try { 
            const user = await signInWithRedirect (auth, provider);
            changeUser(user)
        } catch (error) {
            setIsError(error.message)
        }
    }

    return (
        <Card title="Log in" bordered={false} style={{ width: 400, justifyContent: 'center' }}>
            <UiForm onSubmit={signIn} title={'sign in'}/>
            {isError && <Typography.Text type="danger">{isError}</Typography.Text>}
            <Button
                onClick={signInGoogle}
                style={{ width: '100%' }}>sign in with google</Button>
        </Card>
    )
}

export default Login