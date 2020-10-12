import React, { useEffect, useState } from 'react';
import '../Css/chat.css';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import firebase from "firebase";

const Chat=()=> {
    const user =useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName= useSelector(selectChannelName);
    const[Input,setInput]=useState("");
    const[message,setMessage]=useState([]);

    useEffect(()=>{
        if(channelId){
            db.collection("dbchannels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp","desc")
            .onSnapshot((snapshot)=>
              setMessage(snapshot.docs.map((doc)=>doc.data()))
            );
        }
        
    },[channelId]);

    const sendMessage=(e)=>{
        e.preventDefault();
        db.collection("dbchannels").doc(channelId)
         .collection("messages").add({
             timestamp:firebase.firestore.FieldValue.serverTimestamp(),
             message:Input,
             user:user,
         });
         setInput("");
    }

    return (
        <div className="chat">
           <ChatHeader channelName={channelName}/>

           <div className="chat_message">
                {
                    message.map((mess)=>(
                        <Message
                            timestamp={mess.timestamp}
                            message={mess.message}
                            user={mess.user}
                        />

                    ))}


               {/* <Message />
               <Message />
               <Message /> */}
               
           </div>

           
           <div className="chat_input">
               <AddCircleOutlineIcon fontSize="large"/>
               <form>
                   <input type="text" disabled={!channelId} value={Input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message # ${channelName}`}/>
                   <button type="submit" className="chat_inputButton" onClick={sendMessage}>Send Message</button>
               </form>
               <div className="chat_inputIcon">
                   <CardGiftcardIcon fontSize="large"/>
                   <GifIcon fontSize="large"/>
                   <EmojiEmotionsIcon fontSize="large"/>
               </div>
           </div>
        </div>
    )
}

export default Chat;
