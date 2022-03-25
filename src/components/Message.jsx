import React from 'react';
import { Card, Divider, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const Message = ({ createdAt, email, photoURL, text, isUser }) => {

    const ava = (
        <div className='img'>
            {photoURL
                ? <img src={photoURL} alt=''/>
                : <UserOutlined style={{ color: 'black', fontSize: '14px' }} />
            }
        </div>)

    return (
        <Card
            //title={email}
            //extra={ava}
            // style={{
            //     marginLeft: isUser ? 'auto' : 0,
            //     marginright: isUser ? 0 : 'auto',
            //     maxWidth: '90%'
        // }}
        >1
            {/* <Typography.Text>{text}</Typography.Text>
            <Divider />
            <Typography.Text type="secondary">{createdAt}</Typography.Text> */}
        </Card>
    )
}

export default Message