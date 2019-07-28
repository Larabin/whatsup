import React from 'react';
import DeleteChat from './DeleteChat';

const ChatMenu = (props) => (
    <div className="flex-container flex-container--with-space"> 
        <div className="flex-container flex-center">
            <img className="thumbnail thumbnail--small" src={props.chat.thumbnail} alt={props.chat.name} />
            <h2>{props.chat.name}</h2>            
        </div>         
        <DeleteChat onRemove={props.onRemove} />
    </div>
);
   

export default ChatMenu;