import React, { useEffect, useState } from "react";
import { chatStyle } from "./ChatPage.styles";
import { Box, Grid } from "@mui/material";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import Friends from "../../components/FriendList/Friends";
import { getFriends } from "../../api/services/FriendsListApi";
import { useDispatch } from "react-redux";
import { setFriendsList } from "../../store/slices/FriedListSlice";
import { getAllChat } from "../../api/services/ChatApi";

import { useSelector } from "react-redux";

const ChatPage = () => {
  const { classes } = chatStyle();
  const dispatch = useDispatch();

  const [displayChat, setDisplayChat] = useState([]);
  const [selectedChat, setSelectedChat] = useState(false);
  const [recUser, setRecUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    profilePicture: "",
  });

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userId = userDetails.data.user.id;

  useEffect(() => {
    const allFriends = async () => {
      const friends = await getFriends(userId);
      dispatch(setFriendsList(friends));
    };
    allFriends();
  }, [dispatch, userId]);

  const openChat = async (id, firstName, lastName, profilePicture) => {
    const chat = await getAllChat(id,userId);
    console.log(chat)
    setDisplayChat(chat);
    setSelectedChat(true);
    setRecUser({
      id: id,
      firstName: firstName,
      lastName: lastName,
      profilePicture: profilePicture,
    });
  };

 
  return (
    <Box className={classes.profilePageTopContStyles}>
      <Box className={classes.container}>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid
            item
            xs={10}
            sm={4.5}
            md={3.5}
            lg={2.5}
            sx={{ backgroundColor: "" }}
          >
            <Friends
              className={classes.friendContainer}
              openChat={openChat}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={7.5}
            md={8.5}
            lg={9.5}
            sx={{ padding: "0.5rem" }}
            className={classes.chatContainer}
          >
            <ChatWindow
              displayChat={displayChat}
              selectedChat={selectedChat}
              setDisplayChat={setDisplayChat}
              recUser={recUser}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ChatPage;
