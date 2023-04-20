import React from 'react';
import { IconButton, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const ChatWindow = ({messageList},userName) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const { author}= messageList;

  const sendMessage = () => {
    console.log(currentMessage);
  };
  return (
    

    <div className="chat-window">

    <div className="chat-header">
        
      <div className="user-name">
        
        <Avatar
          sx={{ bgcolor: "red", mr: 2 }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          B
        </Avatar>
        <h3>{author}</h3>
      </div>
    </div>

    <div className="chat-body">
      <div className="message-container">
        {messageList.map((messageContent, index) => {
          const { message, time, author } = messageContent;
          return (
            <div
              className="message"
              key={index}
              id={userName === author ? "other" : "you"}
            >
              <Avatar
                sx={{ bgcolor: "blue", mr: 1 }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                B
              </Avatar>

              <div className="message-content">
                <div className="message-meta">
                  <p id="author">{author}</p>
                  <p id="time">{time}</p>
                </div>

                <p className="msg">{message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <div className="chat-footer">
      <input
        type="text"
        placeholder="Enter The Message"
        value={currentMessage}
        onChange={(e) => {
          setCurrentMessage(e.target.value);
        }}
        onKeyPress={(e) => {
          e.key === "Enter" && sendMessage();
        }}
      />
      <span>
      <IconButton
       className='send'
       
        onClick={sendMessage}
        
      >
        <SendIcon color="success"></SendIcon>
      </IconButton>
      </span>
    </div>

  </div>
  )
}

export default ChatWindow;