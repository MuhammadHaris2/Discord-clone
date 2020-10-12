import { auth } from './firebase';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chat from './Component/Chat';
import Login from './Component/Login';
import Sidebar from './Component/Sidebar';
import {selectUser} from './features/userSlice';
import {login,logout} from './features/userSlice';

const App=()=>{
  const user =useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log("user is",authUser);
      if(authUser){
        //login
        dispatch(
          login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName
          })
        );
      }
      else{
       //logout
       dispatch(logout());
      }
       })
  }, [dispatch])

  return (
    <div className="app">
    {
      user?(
        <>
        <Sidebar/>
        <Chat/>
        </>
      ):(
        <Login/>
      )
    }
    
      </div>
  );
}

export default App;
