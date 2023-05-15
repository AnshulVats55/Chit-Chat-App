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

  const [friendRequests, setFriendRequests] = useState([]);
  const toast = useToast();

  const userId = useSelector((state) => {
    return state.userDataReducer[0].data.user.id;
  });

  useEffect(() => {
    const run = async()=>{
    const requests = await allRequests(userId);
    console.log(requests)
    setFriendRequests(requests);
    }
  run();
  }, [userId]);

  socket.on("followRequest", (data) => {
    setFriendRequests([...friendRequests,data]);
  });

  const acceptRequest = (sender, receiver,id) => {
    socket.emit("requestAccepted", {
      followerUserId: sender,
      followedUserId: receiver,
      status: "Accepted",
    });
    const accept = friendRequests.filter((singleRequest)=>singleRequest?.id ?singleRequest.id :singleRequest?.newRelationship.id !== id)
    setFriendRequests(accept);
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
    const reject = friendRequests.filter((singleRequest)=>singleRequest?.id ?singleRequest.id :singleRequest?.newRelationship.id !== id)
    setFriendRequests(reject);
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
        {friendRequests?.map((friendRequest) => {
          return (
            <Box className={classes.single} key={friendRequest.newRelationship?.id ? friendRequest.newRelationship.id:friendRequest?.id}>
              <Box className={classes.single1}>
                <Avatar
                  className={classes.avatar}
                  alt=""
                  src={
                    friendRequest.follower?.profilePicture
                      ? friendRequest.follower?.profilePicture
                      : friendRequest?.profilePicture
                  }
                ></Avatar>
                <Typography sx={{ marginTop: "6px" }} variant="h6">
                  {friendRequest.follower?.name
                    ? friendRequest.follower?.name
                    : friendRequest?.firstName + " " + friendRequest?.lastName}
                </Typography>
                <IconButton
                  onClick={() =>
                    acceptRequest(
                      friendRequest?.id ? friendRequest?.id : friendRequest.newRelationship.followerUserId,
                      userId ? userId : friendRequest.newRelationship.followedUserId,
                      friendRequest.newRelationship?.id ? friendRequest.newRelationship.id:friendRequest?.id
                      

                    )
                  }
                >
                  <DoneIcon />
                </IconButton>

                <IconButton
                  onClick={() =>
                    rejectRequest(
                      friendRequest?.id ? friendRequest?.id : friendRequest.newRelationship.followerUserId,
                      userId ? userId : friendRequest.newRelationship.followedUserId,
                      friendRequest.newRelationship?.id ? friendRequest.newRelationship.id:friendRequest?.id
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
