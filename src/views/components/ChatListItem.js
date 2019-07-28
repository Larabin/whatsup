import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { setCurrentChat } from '../../actions/currentChat';

export class ChatListItem extends React.Component {
  
  onSelect = () => {
    this.props.selectChat(this.props.id);      
  }; 
  render() {
    return (
      <div onClick={this.onSelect} className="list_item flex-container">
        <img className="thumbnail" src={this.props.thumbnail} alt="Thumbnail" />
        <div className="list_item_text">
          <span className="list_item_title"> {this.props.name} </span>
          {
            this.props.messages && this.props.messages.length > 0 ?
            this.props.messages[this.props.messages.length - 1].text : 'Start a conversation'
          }
        </div>
        <div className="list_item_time">
          {moment(this.props.modifyDate).format('HH:MM')}
        </div>                
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({ 
  isSelected: state.currentChat === props.id
});

const mapDispatchToProps = (dispatch) => ({
  selectChat: (id) => dispatch(setCurrentChat(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatListItem);
