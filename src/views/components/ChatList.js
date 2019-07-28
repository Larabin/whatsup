import React from 'react';
import { connect } from 'react-redux';
import ChatListItem from './ChatListItem';
import selectChats from '../../selectors/chats';

export const ChatList = (props) => (
  <div className="list">    
    {
      props.chats.length === 0 ? (
        <p>No chats</p>
      ) : (          
          props.chats.map((chat) => {
            return <ChatListItem key={chat.id} {...chat} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    chats: selectChats(state.chats, state.filters)
  };
};

export default connect(mapStateToProps)(ChatList);
