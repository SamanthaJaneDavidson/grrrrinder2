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

        const to = document.getElementById('to').value;

        if (token) {
          if(!to) {
            alert("You must specify who to send this message to!");
          }
          else {
            socket.emit("message", inputBox.value, to, token);
          }
        }
        else {
            alert('You must be logged in to use the chat!');
        }
    }
    inputBox.value = '';
  };

  socket.emit("init", auth.getToken());

  const changeShown = () => {
    setShown(!shown);
  }

  if (shown) {
    return <div style={{position: 'fixed', zIndex: 999, backgroundColor: 'white', right: 0, bottom: 50}}>
        <button onClick={changeShown}>close chat</button>
        <ul style={{maxHeight: 300, overflow: 'scroll'}}>
            { messages.msgs.map((v, i) => <li key={i}>{v}</li>) }
        </ul>

        <input id="chat-message" placeholder="Chat Message" />
        <input id="to" placeholder="Recipient Username" />

        <button onClick={ sendMessage }>Send Message</button>
    </div>;
  }
  else {
    return <div style={{position: 'fixed', zIndex: 999, right: 0, bottom: 50}}>
        <button onClick={changeShown}>show chat</button>
    </div>
  }
}

export default Chat;
