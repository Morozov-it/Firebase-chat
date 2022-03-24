import React, { useState } from 'react';
import { Typography } from 'antd';
import { Card } from 'antd';
import { useData } from 'Context';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes'
import { createUserWithEmailAndPassword   } from "firebase/auth";
import UiForm from 'components/UiForm';



const Registration = () => {
    const [isError, setIsError] = useState('')
    const { auth } = useData()
    const navigate = useNavigate()

    const signUp = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate(routes.LOGIN)
        } catch (error) {
            setIsError(error.message)
        }
    }


    return (
        <Card title="Sign up" bordered={false} style={{ width: 400, justifyContent: 'center' }}>
            <UiForm onSubmit={signUp} title={'sign up'}/>
            {isError && <Typography.Text type="danger">{isError}</Typography.Text>}
        </Card>
    )
}

export default Registration