import React from 'react';

const Message = (props) => ( 
    <div>    
       {props.user && (
        <div className="message">       
           <p>{props.user.name + ':'} {props.text}</p>
           {props.images && props.images.length > 0 &&
                props.images.map((img, index) => (
                    <img className="message_image" key={index} src={img} alt={'Test-Image-'+index}/>
                ))
            }
        </div>    
       )}
    </div>          
);

export default Message;