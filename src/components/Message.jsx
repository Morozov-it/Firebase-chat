import React from 'react';
import { Card, Divider, Typography, Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const Message = ({ createdAt, email, photoURL, text, isUser }) => {
    const ava = (
        <div className='img'>
            {photoURL
                ? <Avatar src={<Image src={photoURL} style={{ width: 40 }} />} />
                : <UserOutlined style={{ color: 'black', fontSize: '14px' }} />
            }
        </div>)
    
    const date = () => {
        if (createdAt) {
            return createdAt.toDate().toString().slice(0, -28)
        } else {
            return ''
        }
    }

    return (
        <Card
            title={email.split("@")[0]}
            extra={ava}
            style={{
                padding: 0,
                margin: 2,
                width: 'fit-content',
                maxWidth: '80%',
                alignSelf: isUser ?  'flex-end': 'flex-start',
            }}>
            <Typography.Text>{text}</Typography.Text>
            <Divider style={{margin:0}}/>
            <Typography.Text type="secondary">
                {date()}
            </Typography.Text>
        </Card>
    )
}

export default Message