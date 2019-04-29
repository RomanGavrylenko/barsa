import React from 'react';
import HeadBlock from './components/head-block/head-block';
import Review from './class-components/review/review';
import ChatContext from './context-api/chat-context'
import ChatBlock from './layout/chat-block';
import './app.css';

import { about } from './data/text-data';
import barsa from './images/barsa.jpg'; 

function App() {
  return (
    <ChatContext>
      <HeadBlock about={about} photo={barsa}/>
      <Review />
      <ChatBlock userFirst/>
    </ChatContext>
  );
}

export default App;