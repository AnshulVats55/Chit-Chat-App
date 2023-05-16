import React, { useEffect, useState } from "react";
import { socket } from "../../pages/CommonLayout/CommonLayout";
import { ListStyles } from "../FriendList/FriendList.styles";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Box, Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

const FriendRequests = () => {
  const { classes } = ListStyles();
  
  const [newRequest, setNewRequest] = useState([]);
  const toast = useToast();
  
  const userId = useSelector((state) => {
    return state.userDataReducer[0].data.user.id;
  });

  useEffect(() => {
    const axios = require("axios");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://192.168.1.110:8484/v1/relationship/request?id=${userId}`,
      headers: {
        token:localStorage.getItem("token"),
      },
    };

    axios
      .request(config)
      .then((response) => {
        setNewRequest(response.data.data.followers)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  socket.on("followRequest", (data) => {
    if(data.follower){
    setNewRequest([ data]);
    }
  });

  const acceptRequest = (sender, receiver) => {
    socket.emit("requestAccepted", {
      followerUserId: sender,
      followedUserId: receiver,
      status: "Accepted",
    });
    setNewRequest([]);
    toast({
      title: "Friend Request accepted!",
      position: "top",
      description: "",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const rejectRequest =(sender, receiver) => {
    socket.emit("requestAccepted", {
      followerUserId: sender,
      followedUserId: receiver,
      status: "Failure",
    });
    setNewRequest([]);
    toast({
      title: "Friend request rejected !",
      position: "top",
      description: "",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box className={classes.friendRequestContStyles}>
      <Typography sx={{ margin: "0.5rem 0rem", textAlign:'center', fontWeight:'bold', background:'#363a91', color:'#FFF', padding:'0.25rem 1rem', borderRadius:'15px', fontSize:'0.9rem'}}>
        Your Requests
      </Typography>
      <div style={{ height: "100%",overflowY:"scroll", scrollbarWidth:"none" }} className={classes.friendContainer}>
        {newRequest?.map((s, index) => {
          return (
            <Box className={classes.single} key={index}>
                  <Box className={classes.single1}>
                  <Avatar
                    className={classes.avatar}
                    alt=""
                    src={s.follower?.profilePicture ?s.follower?.profilePicture:s?.profilePicture}
                  ></Avatar>
                  <Typography sx={{ marginTop: "6px" }} variant="body1">
                    {s.follower?.name?s.follower?.name:(s?.firstName + " " + s?.lastName)}
                  </Typography>
                  <IconButton
                    onClick={() =>
                      acceptRequest(
                        s?.id?s?.id: s.newRelationship.followerUserId,
                        userId?userId:s.newRelationship.followedUserId
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
    </Box>
  );
};

export default FriendRequests;
