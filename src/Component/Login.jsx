import { Button } from '@material-ui/core';
import { auth,provider } from '../firebase';
import React from 'react';
import '../Css/login.css';


const Login=()=> {
    const signIn=(e)=>{
        auth.signInWithPopup(provider).catch((error)=> alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Discord_Color_Text_Logo.svg/768px-Discord_Color_Text_Logo.svg.png" alt="discord"/>
            </div>
            <Button onClick={signIn}>Sign IN</Button>
        </div>
    )
}

export default Login;
