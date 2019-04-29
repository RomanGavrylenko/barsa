import React, { useEffect }   from 'react';
import Image from '../image/image';
import flag from '../../images/svg/flag.svg';
import ChatItem from '../chat-item/chat-item';
import ChatInput from '../chat-input/chat-input';
import './chat-view.css';


export default function ChatView({mainAva, name, messages, secondAva, isAdmin, position, handler, title}){

    //переменная для рефа
    let toScroll = null;
   
    useEffect(()=>{
       
        toScroll.scrollTop = (toScroll.scrollHeight - toScroll.clientHeight);
    });


    //получение списка сообщений
    const getList = (items) => {
        return items.map(({ text, time, admin }) => {
            let photo = isAdmin ? mainAva : secondAva;

            return <ChatItem  ava={photo}
                              text={text}
                              time={time} 
                              isOther={admin}
                              key={time}
                              secondAva = {secondAva}/>
        })
    }

    return(
        <>
            <h3 className='chat__title'>
                {title}
            </h3>
            <section className='chat'>
                <div className='chat__header'>
                    <Image  src={mainAva}
                            cls='chat'
                            alt='ava' />
                    <div className='chat__name-block'>
                        <p className='chat__name'>
                            {name}
                        </p>
                        <div className='chat__position-block'>
                            <Image  src={flag}
                                    cls='chat-name'
                                    alt='flag' />
                            <p className='chat__position'>
                                {position}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='chat__list' ref={(div) => toScroll=div}>
                    {getList(messages)}
                </div>
                <div className='chat__input' >
                    <ChatInput  submit={handler} 
                                isAdmin={isAdmin}
                                mainAva={mainAva} />
                </div>
            </section>
        </>
    );
}