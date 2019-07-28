import React from 'react';
import { connect } from 'react-redux';
import { mainService } from '../services/MainService';
import { SERVICE_URLS } from '../services/SERVICES';
import { loaded, addChat } from '../actions/chats';
import { setCurrentChat } from '../actions/currentChat';
import ChatForm from './components/ChatForm';
import PageHeader from './components/PageHeader';

class CreateChatPage extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      contacts:[]
    }
    this.onSubmit = this.onSubmit.bind(this);        
  }

  componentDidMount() {
    mainService.get(SERVICE_URLS.CONTACTS+'?_expand=user').then((contacts) => {     
      this.setState({contacts});
      return mainService.get(SERVICE_URLS.CHATS+'?_embed=messages').then((chats) => {
        this.props.loaded(chats);      
      });
    }).catch(console.log)
  }

  onSubmit(chat) {      
    mainService.post(
        SERVICE_URLS.CHATS,
        chat
    ).then((data) => {      
      this.props.addChat(data);
      this.props.setCurrentChat(data.id);
      this.props.history.push('/');
    }).catch(console.log);       
}
  
  render() {
    return (
      <div className="page page--create">        
        <PageHeader title="Create a new chat"/>
        <ChatForm contacts={this.state.contacts} onSubmit={this.onSubmit}/>
      </div>
    );    
  }
} 

const mapDispatchToProps = (dispatch) => ({
  addChat: (chat) => dispatch(addChat(chat)),
  setCurrentChat: (id) => dispatch(setCurrentChat(id)),
  loaded: (chats) => dispatch(loaded(chats))
});

export default connect(null, mapDispatchToProps)(CreateChatPage);
