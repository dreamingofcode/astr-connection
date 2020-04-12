import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';

import './joinChat.css';

const SignIn =()=> {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const token = localStorage.getItem('token');
    const dispatch= useDispatch()
    const userData= useSelector((state)=>state.userData)
    const isLoading= useSelector((state)=>state.isLoading)
    const currentChatRoom= useSelector((state)=>state.currentChatRoom)
    const currentChatUser= useSelector((state)=>state.currentChatUser)
    return (
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Connect!</h1>
          <div>
            {token? 
            isLoading? (<h1>IS LOADING.....</h1>) :
               (<h2>{`Welcome ${userData.name}`}</h2>
            
              ):              
               <input placeholder="Name" className="joinInput" type="text" onChange={(event) => dispatch({type:"CURRENT_CHAT_USER",payload:event.target.value})} />}
          </div>
          <div>
            <input
              placeholder="Room"
              className="joinInput mt-20"
              type="text"
    onChange={(event) => dispatch({type:"CURRENT_CHAT_ROOM", payload:event.target.value})}   
            
            />
          </div>
          {token?
           isLoading? <h1>Is Loading...</h1>:
          <Link
            onClick={(e) => (!currentChatRoom ? e.preventDefault() : null)}
            to={`/chat?name=${userData.name}&room=${currentChatRoom}`} >
            <button className={'button mt-20'} type="submit">
              Sign In
            </button>
          </Link>: null}

          {!token?    //checks to see if someone is logged in 
          <Link                                               // if not logged in , it uses the input
            onClick={(e) => (!currentChatUser || !currentChatRoom ? e.preventDefault() : null)}
            to={`/chat?name=${currentChatUser}&room=${currentChatRoom}`} >
            <button className={'button mt-20'} type="submit">
              Sign In
            </button>
          </Link>:null}

        </div>
      </div>
    );
  
}

export default SignIn;
