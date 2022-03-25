import React, { useState } from 'react';
import { Typography } from 'antd';
import { Card } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes'
import { useData } from 'Context';
import { signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider  } from "firebase/auth";
import UiForm from 'components/UiForm';



const Login = () => {
    const navigate = useNavigate()
    const [isError, setIsError] = useState('')
    const { auth } = useData()

    const signIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate(routes.CHAT)
        } catch (error) {
            setIsError(error.message)
        }
    }

    const signInWithGoogle = async () => {
        try { 
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider)
            navigate(routes.CHAT)
        } catch (error) {
            setIsError(error.message)
        }
    }

    return (
        <Card title="Log in" bordered={false} style={{ width: 400, justifyContent: 'center' }}>
            <UiForm onSubmit={signIn} title={'sign in'}/>
            {isError && <Typography.Text type="danger">{isError}</Typography.Text>}
            <Button
                onClick={signInWithGoogle}
                style={{ width: '100%' }}>sign in with google</Button>
        </Card>
    )
}

export default Login