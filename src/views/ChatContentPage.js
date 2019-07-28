import React from 'react';
import { connect } from 'react-redux';
import { mainService } from '../services/MainService';
import { SERVICE_URLS } from '../services/SERVICES';
import { updateChat, removeChat } from '../actions/chats';
import ChatMenu from './components/ChatMenu';
import ChatContent from './components/ChatContent';
import SendMessageArea from './components/SendMessageArea';

class ChatContentPage extends React.Component {
    constructor(props) {
        super(props);       
        this.updateMessages = this.updateMessages.bind(this);
        this.onSubmit = this.onSubmit.bind(this);  
        this.onRemove = this.onRemove.bind(this);      
    }        

    updateMessages() {       
        return mainService.get(this.props.chatMessagesUrl + '?_expand=user').then(
            (data) => {                                         
                if(data && this.props.chat) {
                    this.props.updateChat(this.props.chat.id, {messages: data})                  
                }
            }
        );
    }

    onSubmit(message) {        
        mainService.post(
            this.props.chatMessagesUrl,
            message
        ).then(() => this.updateMessages()
        ).catch(console.log);       
    }

    onRemove() {        
        mainService.delete(SERVICE_URLS.CHATS + '/' + this.props.chat.id).then(
            () => this.props.removeChat(this.props.chat)
        ).catch(console.log);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // update messages        
        if ( (!prevProps.chat ) || (                
                this.props.chat && 
                prevProps.chat.id !== this.props.chat.id 
        )) {           
            this.updateMessages().catch(console.log); 
        }
    }
    render() {
        return (
            <div className="flex-grow">
                {
                    this.props.chat !== undefined ? (  
                        <div className="chat-content flex-container">       
                            <ChatMenu 
                                chat={this.props.chat} 
                                onRemove={this.onRemove}
                            />       
                            <ChatContent messages={this.props.chat.messages} />
                            <SendMessageArea                                 
                                onSubmit={this.onSubmit}
                            />
                        </div>
                    ) : (
                        <h2>Choose a chat</h2>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    chat: state.chats.find(({id}) => id === state.currentChat),
    chatMessagesUrl: SERVICE_URLS.CHATS + '/' + state.currentChat + '/messages'
});

const mapDispatchToProps = (dispatch) => ({
    updateChat: (id, chat) => dispatch(updateChat(id, chat)),
    removeChat: (chat) => dispatch(removeChat(chat))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatContentPage);