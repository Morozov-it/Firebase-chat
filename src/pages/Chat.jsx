import React, {useState} from 'react';
import { useData } from 'Context';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { useAuthState } from 'react-firebase-hooks/auth'
import { Input, Button, Card } from 'antd';
import Spinner from 'components/Spinner';
import Message from 'components/Message';



const Chat = () => {
    const { auth } = useData()
    const [ user ] = useAuthState(auth)
    const { db } = useData()
    const [value, setValue] = useState('')
    //хук для синхронизации данных от сервера
    const [messages=[], loading] = useCollectionData(
        collection(db, "messages")
    )

    const sendMessage = async () => {
        try {
            const docRef = await addDoc(collection(db, "messages"), {
                email: user.email,
                photoURL: user.photoURL,
                text: value,
                createdAt: serverTimestamp()
            });
            setValue('')
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.log(error.message)
        }
    }

    if (loading) {
        return (<Spinner />)
    }

    return (
        <div className='my-chat'>
            <Card
                title={user.displayName}
                style={{ height: '90%', overflowY:'auto' }}>
                <div>
                    {messages.map(message => 
                        <Message
                            key={message.createdAt}
                            createdAt={ message.createdAt}
                            email={ message.email }
                            photoURL={ message.photoURL }
                            text={ message.text }
                            isUser={ user.email === message.email } />
                    )}
                </div>
            </Card>
            <Input.TextArea
                style={{margin:'10px 0 5px 0'}}
                autoSize
                placeholder='type your message'
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <Button
                style={{alignSelf: 'flex-end'}}
                onClick={sendMessage}>send</Button>
        </div>
    )
}

export default Chat