import React from 'react';

const PreviewList = (props) => (    
    <ul className="preview-list flex-container">
        {props.images && props.images.map((img,index) =>(
            <li className="preview-list_item flex-container" key={index}>
                <img className="preview-list_image" src={img} alt={'preview-'+index} />              
                <span className="preview-list_button" onClick={() => props.onDelete(index)}>
                    <i className="fas fa-backspace"></i>
                </span>
            </li>
        ))}
    </ul>
);

export default PreviewList;