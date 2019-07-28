import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#app');

class DeleteChat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.removeChat = this.removeChat.bind(this);        
    }
    removeChat() {
        this.closeModal();
        this.props.onRemove();        
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    render() {
        return (
            <div>
               <button onClick={this.openModal}>Remove Chat</button>               
                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                shouldCloseOnOverlayClick={true}
                style={customStyles}
                contentLabel="Delete Chat"
                >
        
                    <h2 ref={subtitle => this.subtitle = subtitle}>Warning</h2>
                    <div>Do you really want to remove this chat?</div>
                    <form>                    
                        <button onClick={this.removeChat}>Yes</button>
                        <button onClick={this.closeModal}>No</button>                
                    </form>
                </Modal>
            </div>
        );
    }
}

export default DeleteChat;