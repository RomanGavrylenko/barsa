import React, { Component } from 'react';
import { userData, adminData } from '../data/chat-data';
const Chat = React.createContext();

const { Provider: ChatProvider, 
        Consumer: ChatConsumer } = Chat;

export { ChatConsumer };

export default class ChatContext extends Component {
    state={
        adminMessages: [],
        userMessages: [],
        allMessages: [],
        user: {
            name: null,
            position: null,
            ava: null,
            isAdmin: null
        },
        admin: {
            name: null,
            position: null,
            ava: null,
            isAdmin: null
        } 
    }

    componentDidMount(){
        //данные пользователя
        const { name: userName, position: userPos, photo: userAva,
            messages: userMessages, isAdmin: user } = userData;
        //данные админа
        const { name: adminName, position: adminPos, photo: adminAva,
            messages: adminMessages, isAdmin } = adminData;
        //все сообщения
        let messages = [...userMessages, ...adminMessages];

        //сортируем сообщение по времени их появления
        messages.sort((a, b) => {
            return a.time - b.time
        })

        this.setState({
            adminMessages,
            userMessages,
            allMessages: [...messages],
            user: {
                name: userName,
                position: userPos,
                ava: userAva,
                isAdmin: user,
            },
            admin: {
                name: adminName,
                position: adminPos,
                ava: adminAva,
                isAdmin,
            }
        })
    }

    //обработка ввода и отправки сообщения из чата
    handleSubmit = (e, isAdmin, text) => {
        e.preventDefault();
        let message = {
            admin: isAdmin,
            time: new Date(),
            text
        }

        if(!text.length) return;

        this.setState((state)=>{
            if(isAdmin){
                return ({
                    allMessages: [...state.allMessages, message],
                    adminMessages: [...state.adminMessages, message]
                })
            } else {
                return ({
                    allMessages: [...state.allMessages, message],
                    userMessages: [...state.userMessages, message]
                })
            }
        })
    }

    render(){

        const value = {
            ...this.state,
            handleSubmit: this.handleSubmit
        }

        return (
            <ChatProvider value={value}>
                {this.props.children}
            </ChatProvider>
        );
    }
}