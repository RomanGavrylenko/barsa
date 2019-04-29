import React from 'react';
import { ChatConsumer } from '../context-api/chat-context';

const withChatContext = (isAdmin) => ( Wrapped ) => {
    return (props)=>{
        return (
            <ChatConsumer>
                {
                    (value)=>{

                        const data = toProps(value, isAdmin);

                        return <Wrapped {...data} {...props}/>
                    }
                }
            </ChatConsumer>
        );
    }
}

//получаем конечный набор свойств  для компонента исходя из флага isAdmin,
//который обозначает, какие данные мы подгружаем 
const toProps = (value, isAdmin) => {

    const { user, allMessages, admin, handleSubmit } = value;

    if(!isAdmin){
        return {
            mainAva: user.ava ,
            name: user.name ,
            messages: allMessages ,
            secondAva: admin.ava ,
            isAdmin: user.isAdmin ,
            position: user.position ,
            handler :  handleSubmit 
        }
    } else {
        return {
            mainAva: admin.ava ,
            name: admin.name ,
            messages: allMessages ,
            secondAva: user.ava ,
            isAdmin: admin.isAdmin ,
            position: admin.position ,
            handler :  handleSubmit 
        }
    }
}

export default withChatContext;