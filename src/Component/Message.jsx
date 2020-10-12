import React from 'react';
import {Avatar} from '@material-ui/core';
const Message=({timestamp,message,user})=> {
    return (
        <div className="message">
            <Avatar src={user.photo}/>
            <div className="message_info">
                <h4>{user.displayName}
                    {/* <span className="message_time">{new Date(timestamp?.toDate()).toUTCString()}</span> */}
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message;
