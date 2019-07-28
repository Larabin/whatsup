import React from 'react';
import {connect} from 'react-redux';
import ContactList from './ContactList';

class ChatForm extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
        name : '',
        thumbnail : '',
        users: [],
        errors:[] 
    }
    this.onImagesUpload = this.onImagesUpload.bind(this);
  }

  onUsersChange = (event) => {  
      event.stopPropagation();  
      const userId = parseInt(event.target.value);  
      if(this.state.users.indexOf(userId) > -1) { 
          let users = []         
          if(this.state.users.length !== 1) {
            users = this.state.users.filter(id => id !== userId);            
          }          
          this.changeThumbnailAndUsers(users);
      } else {          
          const users = this.state.users;          
          users.push(userId);
          this.changeThumbnailAndUsers(users)
      }
  }

  changeThumbnailAndUsers(users) {      
    let thumbnail = this.state.thumbnail;
    let name = this.state.name;
    // set thumbnail
    if(users.length === 1) {
      const contact = this.props.contacts.find((contact)=> contact.userId === users[0]);
      thumbnail = contact.user.thumbnail;    
      name = contact.user.name;  
    } else if(users.length === 0 || users.length === 2) {
      thumbnail = ''; // reset thumbnail
      name = ''; // reset name
    }       
    this.setState(()=>({
        users,
        thumbnail,
        name
    }));
  }

  validateForm() {    
    let errors = [];    
    // check name    
    if (this.props.chats.find(({name}) => this.state.name === name)) {
      errors.push('You have a chat with this name already.');      
    }
    // check users
    if(this.state.users.length === 0) {
      errors.push('You need at least 1 chat member.');      
    }
    // check if all fields are filled correctly
    if (!this.state.name || !this.state.thumbnail || this.state.users.length === 0) {                
      errors.push('Please fill in the entire form.');
    }    
    this.setState(() => ({ errors }));    

    return errors;
  }

  onNameChange = (event) => {
    const name = event.target.value;
    this.setState(() => ({ name }));
  }

  onImagesUpload(event) {
    const files = Array.from(event.target.files);    
    /*    
    const thumbnail = files[0];
    this.setState(() => ({ thumbnail }));
    */
    
    // convert the images to base64 for the mock server
    let fileReader= new FileReader();    
    fileReader.addEventListener("load", (event) => {
      const thumbnail = event.target.result;
      this.setState(() => ({ thumbnail}));     
    });
    fileReader.readAsDataURL( files[0] );
  }
  onSubmit = (event) => {
    event.preventDefault();

    if (this.validateForm().length === 0) { 
      const users = this.state.users;
      users.push(1); // add own id for the mock
      this.props.onSubmit({              
          name: this.state.name,        
          thumbnail: this.state.thumbnail,
          users: users,
          modifyDate: Date.now() // for the mock
      });
    }
  }

  render() {
    return (
      <div>                        
        <form className="form" onSubmit={this.onSubmit}>            
          {this.props.contacts && (
            <ContactList contacts={this.props.contacts} onUsersChange={this.onUsersChange} />
          )}          

          {this.state.thumbnail && (
            <img className="thumbnail thumbnail--big" src={this.state.thumbnail} alt="Thumbnail" />
          )}  

          <div className="text-input-wrapper">
            <input
              type="text"
              placeholder="Chat name"
              value={this.state.name} 
              onChange={this.onNameChange} 
              className="text-input text-input--middle"          
            /> 
          </div>   

          {this.state.users.length > 1 && (
            <label className="button">
              <input className="form_image-upload" type="file" accept="image/*" onChange={this.onImagesUpload} />
              <i className="fas fa-file-upload"></i> Upload thumbnail
            </label>    
          )}

          <button>Create</button>

          {this.state.errors.length > 0 && (
            <div className="form_errors">
              {this.state.errors.map((error,index) => (
                <span key={index} className="form_error">{error}</span>
              ))}
            </div>                        
          )}
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
      chats: state.chats  
});

export default connect(mapStateToProps)(ChatForm);
