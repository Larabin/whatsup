import React from 'react';
import Message from './Message';
const ChatContent = (props) => (
  <div className="content-area">
   {
      props.messages.length === 0 ? (
        <p>Start a conversation</p>
      ) : (          
          props.messages.map((msg) => {           
            return <Message key={msg.id} {...msg} />;
          })
        )
    }
  </div>
);

export default ChatContent;
