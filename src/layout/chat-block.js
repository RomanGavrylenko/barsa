import React from 'react';
import UserChat from '../components/Chats/user-chat';
import AdminChat from '../components/Chats/admin-chat';
import './chat-block.css';

export default function ChatBlock({userFirst}){
    let first, second;
    //проверяем что отобразить первым
    if(userFirst){
        first = <UserChat title={'Чат с пользователем'}/>;
        second = <AdminChat title={'Чат с администратором'}/>
    } else {
        first = <AdminChat title={'Чат с администратором'}/>;
        second = <UserChat title={'Чат с пользователем'}/>
    }

    return (
        <div className='chat-block' >
            <div className='chat-block__single'>
                {first}
            </div>
            <div className='chat-block__line' />
            <div className='chat-block__single'>
                {second}
            </div>
        </div>
    );
}
