import React from 'react';
import PreviewList from './PreviewList';
class SendMessageArea extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
        text : '',
        images : []        
    }
    this.onImagesUpload = this.onImagesUpload.bind(this);
  }

  onTextChange = (event) => {
    const text = event.target.value;
    this.setState(() => ({ text }));
  }

  onImagesUpload = (event) => {    
    const files = Array.from(event.target.files);    
    // with real api
    // const images = this.state.images.concat(files);

    // convert the images to base64 for the mock server
    let images = this.state.images;    
    files.forEach((file) => {
      let fileReader= new FileReader();    
      fileReader.addEventListener("load", (event) => {
        images = images.concat(event.target.result);
        this.setState(() => ({ images})); 
      });      
      fileReader.readAsDataURL(file);
    }); 
  }

  onDelete = (index) => {    
    let images = this.state.images;
    images.splice(index,1);  
    this.setState(() => ({ images}));    
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.text || this.state.images.length) {                
      this.props.onSubmit({    
          userId: 1, // profile id / whatsup id for the mock
          text: this.state.text,        
          images: this.state.images,
          createdAt: Date.now() // for the mock
      });
      // reset content
      this.setState(()=>({
        text: '',
        images: []
      }));
    }  
  }

  render() {
    return (
      <div className="send-message-area">
        {this.state.images.length > 0 && <PreviewList images={this.state.images} onDelete={this.onDelete} /> }
        <form className="form form--send-message" onSubmit={this.onSubmit}>         
          <div className="flex-container">
            <label className="button">
                <input className="form_image-upload" type="file" multiple="multiple" accept="image/*" onChange={this.onImagesUpload} />
                <i className="fas fa-file-upload"></i>
            </label>       
            <div className="text-input-wrapper">
              <input
                type="text"
                placeholder="Your message text"
                value={this.state.text} 
                onChange={this.onTextChange}  
                className="text-input text-input--middle"         
              />
            </div>            
            <button>Send</button>                     
          </div>          
        </form>    
      </div>
    )
  }
}

export default SendMessageArea;
