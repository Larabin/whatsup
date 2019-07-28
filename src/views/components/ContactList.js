import React from 'react';


const ContactList = (props) => (
    <div>
        <legend>Choose users</legend>
        {props.contacts.map(
            ({user}) => (
                <p key={user.id} className="list_item list_item--contacts flex-container" 
                    onClick={() => document.getElementById(user.id).click()}
                >                       
                    <label className="list_item_title" htmlFor={user.id}>{user.name}</label>
                    <input type="checkbox" name="users" value={user.id} id={user.id} onClick={props.onUsersChange} />
                </p>              
            )
        )}
    </div>
)

export default ContactList;