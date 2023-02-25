// //Test
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import auth from "../utils/auth";

const socket = io();

function Chat() {
  const [messages, setMessages] = useState({
    msgs: []
  });

  const [shown, setShown] = useState(false);

  useEffect(() => {
    socket.on("message", (msg) => {
        console.log(messages);
        console.log('Got ' + msg);
        setMessages({
            msgs: [
                msg,
                ...messages.msgs,
            ]
        });
    });

    return () => {
      socket.off("message");
    };
  }, [messages]);

  const sendMessage = () => {
    let inputBox = document.getElementById('chat-message');

    if (inputBox.value) {
        const token = auth.getToken();

        if (token) {
            socket.emit("message", inputBox.value, token);
        }
        else {
            alert('You must be logged in to use the chat!');
        }
    }
    inputBox.value = '';
  };

  const changeShown = () => {
    setShown(!shown);
  }

  if (shown) {
    return <div style={{position: 'fixed', right: 0, bottom: 50}}>
        <button onClick={changeShown}>close chat</button>
        <ul style={{maxHeight: 300, overflow: 'scroll'}}>
            { messages.msgs.map((v, i) => <li key={i}>{v}</li>) }
        </ul>

        <input id="chat-message" placeholder="Chat Message" />

        <button onClick={ sendMessage }>Send Message</button>
    </div>;
  }
  else {
    return <div style={{position: 'fixed', right: 0, bottom: 50}}>
        <button onClick={changeShown}>show chat</button>
    </div>
  }
}

export default Chat;
