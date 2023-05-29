import React, { useEffect, useState } from "react";
import { socket } from "../../pages/CommonLayout/CommonLayout";
import { ListStyles } from "../FriendList/FriendList.styles";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Box, Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { allRequests } from "../../api/services/FriendRequestApi";
import { setSnackbar } from "../../store/slices/SnackBarSlice";
import message from "../../Constants";
import { useDispatch } from "react-redux";

const FriendRequests = () => {
  const { classes } = ListStyles();
  const dispatch = useDispatch();
  const [friendRequests, setFriendRequests] = useState([]);

  const userId = useSelector((state) => {
    return state?.userDataReducer[0]?.data?.user.id;
  });

  useEffect(() => {
    const run = async () => {
      const requests = await allRequests(userId);
      setFriendRequests(requests);
      
    };
    run();
  }, [userId]);

  socket.on("followRequest", (data) => {
    console.log(data)
    if(data.follower){
    setFriendRequests([...friendRequests, data]);
    }
  });

  const acceptRequest = (sender, receiver, id) => {
  
    const accept = friendRequests.filter((singleRequest) =>
      singleRequest?.id
        ? singleRequest.id
        : singleRequest?.newRelationship.id !== id
    );
    setFriendRequests(accept);
    socket.emit("requestAccepted", {
      followerUserId: sender,
      followedUserId: receiver,
      status: "Accepted",
    });
    dispatch(
      setSnackbar({
        snackbarOpen: true,
        snackbarType: message.SUCCESS,
        snackbarMessage: "Friend request accepted !",
      })
    );
  };

  const rejectRequest = (sender, receiver, id) => {
  
    const reject = friendRequests.filter((singleRequest) =>
      singleRequest?.id
        ? singleRequest.id
        : singleRequest?.newRelationship.id !== id
    );
    setFriendRequests(reject);
    socket.emit("requestAccepted", {
      followerUserId: sender,
      followedUserId: receiver,
      status: "Failure",
    });
    dispatch(
      setSnackbar({
        snackbarOpen: true,
        snackbarType: message.ERROR,
        snackbarMessage: "Friend request rejected !",
      })
    );
  };

  return (
    <Box className={classes.friendRequestContStyles}>
      <Typography className={classes.friendRequestText} variant="h6">
        Your Requests
      </Typography>
      <Box className={classes.friendContainer}>
        {friendRequests.length>0?(friendRequests?.map((friendRequest) => {
          return (
            <Box
              className={classes.single}
              key={
                friendRequest.newRelationship?.id
                  ? friendRequest.newRelationship.id
                  : friendRequest?.id
              }
            >
              <Box className={classes.single1}>
                <Avatar
                  className={classes.avatar}
                  alt=""
                  src={
                    friendRequest?.follower?.profilePicture
                      ? friendRequest?.follower?.profilePicture
                      : friendRequest?.profilePicture
                  }
                ></Avatar>
                <Typography sx={{ marginTop: "6px" }} variant="h6">
                  {friendRequest?.follower?.name
                    ? friendRequest?.follower?.name
                    : friendRequest?.firstName + " " + friendRequest?.lastName}
                </Typography>
                <IconButton
                  onClick={() =>
                    acceptRequest(
                      friendRequest?.id
                        ? friendRequest?.id
                        : friendRequest.newRelationship.followerUserId,
                      userId
                        ? userId
                        : friendRequest.newRelationship.followedUserId,
                      friendRequest.newRelationship?.id
                        ? friendRequest.newRelationship.id
                        : friendRequest?.id
                    )
                  }
                >
                  <DoneIcon />
                </IconButton>
                <IconButton
                  onClick={() =>
                    rejectRequest(
                      friendRequest?.id
                        ? friendRequest?.id
                        : friendRequest.newRelationship.followerUserId,
                      userId
                        ? userId
                        : friendRequest.newRelationship.followedUserId,
                      friendRequest.newRelationship?.id
                        ? friendRequest.newRelationship.id
                        : friendRequest?.id
                    )
                  }
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          );
        })):(
        <Box sx={{textAlign:"center",marginTop:"1rem",opacity:"0.6"}}>
          <h1 >No Friend Requests Yet ...</h1>
        </Box>
        )}
      </Box>
    </Box>
  );
};

export default FriendRequests;
