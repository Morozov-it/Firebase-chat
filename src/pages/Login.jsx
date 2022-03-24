import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';


const Login = () => {
    return (
        <Card title="Log in" bordered={false} style={{ width: 400, justifyContent: 'center' }}>
            <Button style={{width: '100%'}} type="primary">log via google</Button>
        </Card>
    )
}

export default Login