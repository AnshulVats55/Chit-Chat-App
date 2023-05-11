import React, { useEffect, useState } from "react";
import { socket } from "../../pages/CommonLayout/CommonLayout";
import { ListStyles } from "../FriendList/FriendList.styles";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Box, Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { allRequests } from "../../api/services/FriendRequestApi";



const FriendRequests = () => {
  const { classes } = ListStyles();

  const [newRequest, setNewRequest] = useState([]);
  const toast = useToast();

  const userId = useSelector((state) => {
    return state.userDataReducer[0].data.user.id;
  });

  useEffect(() => {
    const run = async()=>{
    const requests = await allRequests(userId);
    console.log(requests)
    setNewRequest(requests);
    }
  run();
  }, [userId]);

  socket.on("followRequest", (data) => {
    // if (data.follower) {
    //   setNewRequest([data]);
    //   console.log(data)
    // }
    setNewRequest([...newRequest,data]);
  });

  const acceptRequest = (sender, receiver,id) => {
    socket.emit("requestAccepted", {
      followerUserId: sender,
      followedUserId: receiver,
      status: "Accepted",
    });
    const h = newRequest.filter((r)=>r?.id ?r.id :r?.newRelationship.id !== id)
    setNewRequest(h);
    toast({
      title: "Friend Request accepted!",
      position: "top",
      description: "",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  const rejectRequest = (sender, receiver,id) => {
    socket.emit("requestAccepted", {
      followerUserId: sender,
      followedUserId: receiver,
      status: "Failure",
    });
    const h = newRequest.filter((r)=>r?.id ?r.id :r?.newRelationship.id !== id)
    setNewRequest(h);
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
      <Typography className={classes.heading} variant="h6">
        Your Requests
      </Typography>
      <Box className={classes.friendContainer}>
        {newRequest?.map((s) => {
          return (
            <Box className={classes.single} key={s.newRelationship?.id ? s.newRelationship.id:s?.id}>
              <Box className={classes.single1}>
                <Avatar
                  className={classes.avatar}
                  alt=""
                  src={
                    s.follower?.profilePicture
                      ? s.follower?.profilePicture
                      : s?.profilePicture
                  }
                ></Avatar>
                <Typography sx={{ marginTop: "6px" }} variant="h6">
                  {s.follower?.name
                    ? s.follower?.name
                    : s?.firstName + " " + s?.lastName}
                </Typography>
                <IconButton
                  onClick={() =>
                    acceptRequest(
                      s?.id ? s?.id : s.newRelationship.followerUserId,
                      userId ? userId : s.newRelationship.followedUserId,
                      s.newRelationship?.id ? s.newRelationship.id:s?.id
                      

                    )
                  }
                >
                  <DoneIcon />
                </IconButton>

                <IconButton
                  onClick={() =>
                    rejectRequest(
                      s?.id ? s?.id : s.newRelationship.followerUserId,
                      userId ? userId : s.newRelationship.followedUserId,
                      s.newRelationship?.id ? s.newRelationship.id:s?.id
                    )
                  }
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default FriendRequests;
