import React, { useState } from 'react';
import Image from '../image/image';
import './chat-input.css';

export default function ChatInput({mainAva, submit, isAdmin}){

    const [ value, setValue ] = useState('');

    //обработка ввода инпута
    const handleInput = (e) => {
        setValue(e.currentTarget.value)
    }

    //отправка формы
    const onSubmit = (e, isAdmin, value) => {
        submit(e, isAdmin, value);
        setValue('');
    } 

    return(
        <>
            <Image  src={mainAva}
                    cls='chat-input'
                    alt='mainAva'/>
            <form className='chat-item__form' onSubmit={(e)=>onSubmit(e, isAdmin, value)}>
                <input  type='text'
                        placeholder='Напишите сообщение...'
                        className='chat-input__input'
                        value={value}
                        onChange={handleInput}/>
                <button className='chat-input__button' />
            </form>
        </>
    );
}