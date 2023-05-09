import React, { useEffect, useState } from "react";
import axios from "axios";
import { chatStyle } from "./ChatPage.styles";
import { Box, Grid } from "@mui/material";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import Friends from "../../components/FriendList/Friends";
import IP_ADDRESS from '../../api/IPAddress';

import { useSelector } from "react-redux";

const ChatPage = () => {

  const { classes } = chatStyle();

  const [friends,setFriends]= useState([]);
  const [search, setSearch]= useState("");
  const [displayChat, setDisplayChat] = useState([]);
  const [selectedChat, setSelectedChat] = useState(false);
  const [recUser, setRecUser] = useState({id:"",firstName:"",lastName:"",profilePicture:""});

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userId = userDetails.data.user.id;

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${IP_ADDRESS}/v1/relationship/all/${userId}`,
      headers: {
        token:localStorage.getItem("token"),
      },
    };

    axios
      .request(config)
      .then((response) => {
        setFriends(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);
  
  const openChat = (id,firstName, lastName, profilePicture) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${IP_ADDRESS}/v1/chat?senderId=${userId}&receiverId=${id}`,
      headers: {
        token:localStorage.getItem("token"),
      },
    };

    axios
      .request(config)
      .then((response) => {
        setDisplayChat(response.data.data);
        setSelectedChat(true);
        setRecUser({id:id,firstName:firstName,lastName:lastName,profilePicture:profilePicture})
      })
      .catch((error) => {
        console.log(error);
      });
  };

    const changeHandler = (e)=>{
      setSearch(e.target.value);
    }

  return (
    <Box className={classes.profilePageTopContStyles}>
    <Box className={classes.container}>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={10} sm={4.5} md={3.5} lg={2.5} sx={{ backgroundColor: "" }}>
          <Friends
            className={classes.friendContainer}
            openChat={openChat}
            changeHandler={changeHandler}
            friends={friends}
            search={search}
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
