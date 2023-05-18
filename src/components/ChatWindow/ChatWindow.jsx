import React, { useState } from "react";
import { IconButton, Avatar, Paper, Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ChatStyles } from "./chatWindow.styles";
import { socket } from "../../pages/CommonLayout/CommonLayout";
import { useSelector } from "react-redux";

const ChatWindow = ({ selectedChat, displayChat, setDisplayChat, recUser }) => {
  const { classes } = ChatStyles();

  const userId = useSelector((state) => {
    return state.userDataReducer[0].data.user.id;
  });

  const time = (t) => {
    const date = new Date(t * 1000);
    const hours = date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const formattedTime = hours + ":" + minutes.toString().substring(-2);
    return formattedTime;
  };

  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = () => {
    const today = new Date();
    setDisplayChat([
      ...displayChat,
      {
        senderId: userId,
        receiverId: recUser.id,
        body: currentMessage,
        times: today.getHours() + ":" + today.getMinutes(),
      },
    ]);

    socket.emit("message", {
      senderId: userId,
      receiverId: recUser.id,
      body: currentMessage,
    });
    setCurrentMessage([]);
  };

  socket.on("receive", (chat) => {
    if (recUser.id === chat.senderId) {
      setDisplayChat([...displayChat, chat]);
    }
  });

  return (
    <Box className="containers">
      {selectedChat ? (
        <Paper elevation={3} className={classes.chatWindow}>
          <Box className={classes.chatHeader}>
            <Box className={classes.userName}>
              <Avatar
                className={classes.avatar}
                alt=""
                src={recUser.profilePicture}
              ></Avatar>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
                variant="h5"
              >
                {recUser.firstName + " " + recUser.lastName}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.chatBody}>
            <Box className={classes.messageContainer}>
              {displayChat?.map((msg) => {
                const timeStamp = time(msg.createdAt);

                return (
                  <>
                    <Box
                      className={
                        userId === msg.senderId
                          ? classes.messageSender
                          : classes.messageReceiver
                      }
                      key={msg.id}
                    >
                      <Box
                        className={
                          userId === msg.senderId
                            ? classes.messageContent
                            : classes.messageContent1
                        }
                      >
                        <Typography className={classes.msg}>
                          {msg.body}
                        </Typography>

                        <Typography className={classes.time}>
                          {msg.times ? msg.times : timeStamp}
                        </Typography>
                      </Box>
                    </Box>
                  </>
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
      ) : (
        <Box className={classes.picture}>
          <img
            src="https://chatkr.com/static/img/homepage_2.png"
            alt=""
            className={classes.pic}
          />
        </Box>
      )}
    </Box>
  );
};

export default ChatWindow;
