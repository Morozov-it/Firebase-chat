import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';



const UiForm = ({onSubmit, title}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
    <Form
        name="basic"
        labelCol={{ span: 6 }}
        initialValues={{ remember: true }}
        onFinish={()=>onSubmit(email, password)}
        autoComplete="off">
        <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input value={email}
                onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password value={password}
                onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item>
            <Button style={{width: '100%'}} type="primary" htmlType="submit">
                {title}
            </Button>
        </Form.Item>
    </Form>
    );
};

export default UiForm