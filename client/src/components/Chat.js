// //Test
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import auth from "../utils/auth";
import { Button } from "react-bootstrap";

const socket = io();

function Chat() {
  const [messages, setMessages] = useState({
    msgs: [],
  });

  const [shown, setShown] = useState(false);

  useEffect(() => {
    socket.on("message", (msg) => {
      console.log(messages);
      console.log("Got " + msg);
      setMessages({
        msgs: [msg, ...messages.msgs],
      });
    });

    return () => {
      socket.off("message");
    };
  }, [messages]);

  const sendMessage = () => {
    let inputBox = document.getElementById("chat-message");

    if (inputBox.value) {
      const token = auth.getToken();

      const to = document.getElementById("to").value;

      if (token) {
        if (!to) {
          alert("You must specify who to send this message to!");
        } else {
          socket.emit("message", inputBox.value, to, token);
        }
      } else {
        alert("You must be logged in to use the chat!");
      }
    }
    inputBox.value = "";
  };

  socket.emit("init", auth.getToken());

  const changeShown = () => {
    setShown(!shown);
  };

  if (shown) {
    return (
      <div
        className="chatbox"
        style={{
          position: "fixed",
          zIndex: 999,
          backgroundColor: "#d1d1d4",
          right: 10,
          bottom: 40,
        }}
      >
        <Button
          id="closechat"
          className="btn"
          onClick={changeShown}
          variant="secondary"
        >
          Close Chat
        </Button>
        <ul className= "bullets" style={{ maxHeight: 500, overflow: "scroll" }}>
          {messages.msgs.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
        <div>
          <input id="to" placeholder="Recipient Username" />
        </div>
        <div>
          <input id="chat-message" placeholder="Chat Message" />
        </div>
        <Button
          id="sendmsg"
          className="btn"
          onClick={sendMessage}
          variant="secondary"
        >
          Send Message
        </Button>
      </div>
    );
  } else {
    return (
      <div style={{ position: "fixed", zIndex: 999, right: 0, bottom: 50 }}>
        <Button
          id="show-chat-btn"
          className="btn"
          onClick={changeShown}
          variant="primary"
        >
          Show Chat
        </Button>
      </div>
    );
  }
}

export default Chat;
