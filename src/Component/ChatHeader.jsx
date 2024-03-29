import React from 'react';
import '../Css/chat.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';

const ChatHeader=({channelName})=> {
    return (
        <div className="chatHeader">
            <div className="chatHeader_l">
                <h3>
                    <span className="chatHeader_s">#</span>
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader_r">
               <NotificationsIcon/>
               <EditLocationIcon/>
               <PeopleAltIcon/>
               <div className="chatHeader_S">
                   <input type="text" placeholder="Search"/>
                   <SearchIcon/>

               </div>
               <SendIcon/>
               <HelpIcon/>
            </div>
        </div>
    )
}

export default ChatHeader;
