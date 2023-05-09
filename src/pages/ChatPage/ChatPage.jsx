import React, { useEffect, useState } from "react";
import axios from "axios";
import { chatStyle } from "./ChatPage.styles";
import { Box, Grid } from "@mui/material";
import ChatWindow from "../../components/chatWindow/ChatWindow";
import Friends from "../../components/friendList/Friends";

import { useSelector } from "react-redux";

const ChatPage = () => {

  const [friends,setFriends]= useState([]);

  const [search, setSearch]= useState("");

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userId = userDetails.data.user.id;
  console.log(userId);

  useEffect(() => {

    let config = {
      method: "get",

      maxBodyLength: Infinity,

      url: `http://192.168.1.110:8484/v1/relationship/all/${userId}`,

      headers: {
        token:localStorage.getItem("token"),
      },
    };

    axios
      .request(config)

      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setFriends(response.data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [userId]);
  
  const [displayChat, setDisplayChat] = useState([]);
  const [selectedChat, setSelectedChat] = useState(false);
  const [recUser, setRecUser] = useState({id:"",firstName:"",lastName:"",profilePicture:""});

  const openChat = (id,firstName, lastName, profilePicture) => {

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://192.168.1.110:8484/v1/chat?senderId=${userId}&receiverId=${id}`,
      // url: `https://five5chitchat.onrender.com/v1/chat?senderId=${userId}&receiverId=${id}`,
      headers: {
        token:localStorage.getItem("token"),
      },
    };

    axios
      .request(config)

      .then((response) => {
        console.log(JSON.stringify(response.data.data[1]));
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
 


  const { classes } = chatStyle();
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
            // setFriends={setFriends}
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
        {/* <SearchFriend/> */}
      </Grid>
    </Box>
    </Box>
  );
};

export default ChatPage;
