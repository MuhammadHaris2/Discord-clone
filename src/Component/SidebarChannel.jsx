import React from 'react'
import { useDispatch } from 'react-redux';
import '../Css/sidebar.css';
import { setChannelInfo } from '../features/appSlice';

const SidebarChannel=({id,channelName})=> {
    console.log("id is",id);
    const dispatch = useDispatch();
    return (
        <div className="sidebarchannel" onClick={()=>dispatch(
            setChannelInfo({
                channelId:id,
                channelName:channelName,
            })
        )}>
            <h4>
                <span className="sidebarchannel_s">
                    #
                </span>
                {channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel;
