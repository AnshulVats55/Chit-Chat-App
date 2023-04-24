import React from "react";
import { IconButton, Avatar, Paper, Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { ChatStyles } from "./chatWindow.styles";

const ChatWindow = () => {
  const { classes } = ChatStyles();
  const [currentMessage, setCurrentMessage] = useState("");
  const isAdmin = true;

  const messageList = [
    {
      message: "hi ",
      time: "12:53",
      author: "mohammed ishaq",
    },
    {
      message:
        "hi therekkk hjshwj siwswijsksn hswihswnskjn snwkjsw swsbws wsis",
      time: "12:53",
      author: "mohammed ishaq qqqqqq2222",
    },
    {
      message:
        "hi therekkk hjshwj siwswijsksn hswihswnskjn snwkjsw swsbws wsis",
      time: "12:53",
      author: "mohammed ishaq qqqqqq2222",
    },
    {
      message:
        "hi therekkk hjshwj siwswijsksn hswihswnskjn snwkjsw swsbws wsis",
      time: "12:53",
      author: "mohammed ishaq qqqqqq2222",
    },
    {
      message:
        "hi therekkk hjshwj siwswijsksn hswihswnskjn snwkjsw swsbws wsis",
      time: "12:53",
      author: "mohammed ishaq qqqqqq2222",
    },
    {
      message:
        "hi therekkk hjshwj siwswijsksn hswihswnskjn snwkjsw swsbws wsis",
      time: "12:53",
      author: "mohammed ishaq qqqqqq2222",
    },
    {
      message:
        "hi therekkk hjshwj siwswijsksn hswihswnskjn snwkjsw swsbws wsis",
      time: "12:53",
      author: "mohammed ishaq qqqqqq2222",
    },
    {
      message:
        "hi therekkk hjshwj siwswijsksn hswihswnskjn snwkjsw swsbws wsis",
      time: "12:53",
      author: "mohammed ishaq qqqqqq2222",
    },
    {
      message:
        "hi therekkk hjshwj siwswijsksn hswihswnskjn snwkjsw swsbws wsis",
      time: "12:53",
      author: "mohammed ishaq qqqqqq2222",
    },
    {
      message:
        "hi therekkk hjshwj siwswijsksn hswihswnskjn snwkjsw swsbws wsis",
      time: "12:53",
      author: "mohammed ishaq qqqqqq2222",
    },
  ];

  const sendMessage = () => {
    console.log(currentMessage);
  };
  return (
    <Box className="containers">
      <Paper elevation={3} className={classes.ChatWindow}>
        <Box className={classes.chatHeader}>
          <Box className={classes.userName}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              B
            </Avatar>
            <Typography variant="h5">Author</Typography>
          </Box>
        </Box>
        <Box className={classes.chatBody}>
          <Box className={classes.messageContainer}>
            {messageList.map((messageContent, index) => {
              const { message, time, author } = messageContent;
              return (
                <Box
                  className={
                    isAdmin ? classes.messageSender : classes.messageReceiver
                  }
                  key={index}
                >
                  <Box className={classes.messageContent}>
                    <Box className={classes.messageMeta}>
                      <Typography variant="body2" className={classes.author}>
                        {author}
                      </Typography>
                      <Typography variant="body2">{time}</Typography>
                    </Box>
                    <Typography className={classes.msg}>{message}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <div className={classes.chatFooter}>
          <input
            className={classes.input}
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

          <IconButton className={classes.send} onClick={sendMessage}>
            <SendIcon color="#fff"></SendIcon>
          </IconButton>
        </div>
      </Paper>
    </Box>
  );
};

export default ChatWindow;
