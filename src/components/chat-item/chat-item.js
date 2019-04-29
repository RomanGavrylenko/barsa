import React from 'react';
import Image from '../image/image';
import './chat-item.css';
import { getMessageTime } from '../../services/get-message-time'

export default function ChatItem({ava,text, time, isOther}){

    let cls = isOther ? 'chat-item chat-item_color' : 'chat-item';
    return(
        <div className={cls}>
            <Image  src = {ava}
                    cls='chat-item'
                    alt='ava' />
            <div className='chat-item__message'>
                <p className='chat-item__text'>
                    {text}
                </p>
                <p className='chat-item__time'>
                    {getMessageTime(time)}
                </p>
            </div>
        </div>
    ); 
}