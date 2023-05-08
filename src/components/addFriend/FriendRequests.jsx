import React, { useEffect, useState } from "react";
// import { socket } from "../chatWindow/ChatWindow";
import { socket } from "../../pages/FinalLayout/FinalLayout";
import { ListStyles } from "../friendList/FriendList.styles";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Box, Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const FriendRequests = () => {
  const { classes } = ListStyles();
  const [newRequest, setNewRequest] = useState([]);
  
  const userId = useSelector((state) => {
    return state.userDataReducer[0].data.user.id;
  });
  useEffect(() => {
    const axios = require("axios");
  

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://172.16.1.135:8484/v1/relationship/request?id=${userId}`,
      headers: {
        token:localStorage.getItem("token"),
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data.followers));
        setNewRequest(response.data.data.followers)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  socket.on("followRequest", (data) => {
    console.log("data", data);
    if(data.follower){
    setNewRequest([...newRequest, data]);
    }
  });

  const acceptRequest = (sender, receiver) => {
    console.log("hi", sender, receiver);
    socket.emit("requestAccepted", {
      followerUserId: sender,
      followedUserId: receiver,
      status: "Accepted",
    });
    setNewRequest([]);
  };
  const rejectRequest =(sender, receiver) => {
    console.log("hi", sender, receiver);
    socket.emit("requestAccepted", {
      followerUserId: sender,
      followedUserId: receiver,
      status: "Failure",
    });
    setNewRequest([]);
  };

  return (
    <div
      style={{
        minHeight: "55%",
        marginTop: "2rem",
        border: "2px solid green",
        width: "100%",
        overflowY:"scroll"
      }}
    >
      <Typography sx={{ marginBottom: "0.5rem" }} variant="h5">
        Your Requests
      </Typography>
      <div style={{ height: "100%" }} className={classes.friendContainer}>
        {newRequest?.map((s, index) => {
          return (
            <Box className={classes.single} key={index}>
              
                  <Box className={classes.single1}>
                  <Avatar
                    className={classes.avatar}
                    alt=""
                    src={s.follower?.profilePicture ?s.follower?.profilePicture:s?.profilePicture}
                  ></Avatar>
                  <Typography sx={{ marginTop: "6px" }} variant="h6">
                    {s.follower?.name?s.follower?.name:(s?.firstName + " " + s?.lastName)}
                  </Typography>
                  <IconButton
                    onClick={() =>
                      acceptRequest(
                        s.id,
                        userId
                      )
                    }
                  >
                    <DoneIcon />
                  </IconButton>
  
                  <IconButton onClick={() =>
                      rejectRequest(
                        s?.id?s?.id: s.newRelationship.followerUserId,
                        userId?userId:s.newRelationship.followedUserId
                      )
                    }>
                    <CloseIcon />
                  </IconButton>
  
                  
                </Box>
                
              
              
              
             
            </Box>
          );
        })}
      </div>
    </div>
  );
};

export default FriendRequests;
