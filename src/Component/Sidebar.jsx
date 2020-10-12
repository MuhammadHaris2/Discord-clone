import React, { useEffect, useState } from 'react';
import '../Css/sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth, db } from '../firebase';

const Sidebar=()=> {
    const user = useSelector(selectUser);
    const [channels,setChannels]=useState([]);
    
    useEffect(()=>{
        db.collection("dbchannels").onSnapshot((snapshot)=>
        setChannels(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                channel:doc.data(),
            }))
        )
        );
    },[]);

    const addChannel=()=>{
        const channelName=prompt("Enter a new channel name");
        if(channelName){
            db.collection("dbchannels").add({
                channelName: channelName,
            });
        }
    }



    return (
        <div className="sidebar">
          <div className="sidebar_start">
              <h3>Muhammad Haris</h3>
              <ExpandMoreIcon/>
          </div>
          <div className="sidebar_channels">
              <div className="sidebar_channelsHeader">
                  <div className="sidebar_h">
                  <ExpandMoreIcon/>
                  <h4>Channels</h4>
                  </div>
                    <AddIcon className="sidebar_icon"onClick={addChannel}/>
              </div>

              <div className="sidebar_channelI">
                   {channels.map(({id,channel})=>(
                       <SidebarChannel key={id}
                           id={id}
                           channelName={channel.channelName}
                       />
                   ))}

                    {/* <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/> */}

              </div>
          </div>
          <div className="sidebar_2last">
              <SignalCellularAltIcon fontSize="large" className="s2l_vicon"/>
          
          <div className="sidebar_2lastInfo">
              <h3>Voice Connected</h3>
              <p>Stream</p>
          </div>
          <div className="sidebar_2lastIcon">
              <HelpOutlineIcon/>
              <CallIcon/>
          </div>
          </div>

          <div className="sidebar_last">
              <Avatar 
              className="siidebar_avatar" 
              src={user.photo}
              onClick={()=>auth.signOut()}    
              />

              <div className="sidebar_lastInfo">
              <h3>{user.displayName}</h3>
              <p>#{user.uid.substring(0,5)}</p>
          </div>

          <div className="sidebar_lastIcon">
              <MicIcon/>
              <HeadsetIcon/>
              <SettingsIcon/>
          </div>
          
          </div>  
    </div>
    )
}

export default Sidebar;
