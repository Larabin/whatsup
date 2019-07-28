import React from 'react';
import { connect } from 'react-redux';
import { loaded } from '../actions/chats';
import { mainService } from '../services/MainService';
import { SERVICE_URLS } from '../services/SERVICES';
import ChatList from './components/ChatList';
import SearchBox from './components/SearchBox';
import UserMenu from './components/UserMenu';

class ChatListPage extends React.Component {
  componentDidMount() {
    mainService.get(SERVICE_URLS.CHATS+'?_embed=messages').then((chats) => {
      this.props.loaded(chats);      
    }).catch(console.log)
  }
  render(){
    return (
      <div className="page">
        <UserMenu className="menu"/>
        <SearchBox className="search-box"/>
        <ChatList className="chat-list"/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loaded: (chats) => dispatch(loaded(chats))
});

export default connect(null, mapDispatchToProps)(ChatListPage);

