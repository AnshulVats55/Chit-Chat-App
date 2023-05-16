import React, { useEffect, useState } from "react";
import { socket } from "../../pages/CommonLayout/CommonLayout";
import { ListStyles } from "../FriendList/FriendList.styles";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Box, Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { allRequests } from "../../api/services/FriendRequestApi";
import DisplayAlert from "../AlertBox/DisplayAlert";
import {changeDisplayState} from "../../store/slices/DisplayAlertSlice";
import { useDispatch } from "react-redux";

const FriendRequests = () => {
  const { classes } = ListStyles();

  const [friendRequests, setFriendRequests] = useState([]);

  const [showAlertToast,setshowAlertToast] = useState({visiblity: false, message: "", status: ""});

  const dispatch = useDispatch();
  useEffect(() => {
      if (showAlertToast.visiblity === true) {
        dispatch((changeDisplayState(showAlertToast)))
        setTimeout(()=>{
          setshowAlertToast({visiblity: false, message: ""});
        },2000);       
      }
  }, [showAlertToast]);


  const userId = useSelector((state) => {
    return state?.userDataReducer[0]?.data?.user.id;
  });

  useEffect(() => {
    const run = async()=>{
    const requests = await allRequests(userId);
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
    // const h = newRequest.filter((r)=>r?.id ?r.id :r?.newRelationship.id !== id)
    // setNewRequest(h);
    setshowAlertToast({visiblity: true, message:"Friend Request accepted!", status:"success"});
  };

  const rejectRequest = (sender, receiver,id) => {
    socket.emit("requestAccepted", {
      followerUserId: sender,
      followedUserId: receiver,
      status: "Failure",
    });
    const reject = friendRequests.filter((singleRequest)=>singleRequest?.id ?singleRequest.id :singleRequest?.newRelationship.id !== id)
    setFriendRequests(reject);
    // const h = newRequest.filter((r)=>r?.id ?r.id :r?.newRelationship.id !== id)
    // setNewRequest(h);
    setshowAlertToast({visiblity: true, message:"Friend request rejected !", status:"error"});
  };

  return (
    <Box className={classes.friendRequestContStyles}>
      {/* <Typography sx={{ margin: "0.5rem 0rem", textAlign:'center', fontWeight:'bold', background:'#363a91', color:'#FFF', padding:'0.25rem 1rem', borderRadius:'15px', fontSize:'0.9rem'}}> */}
      {showAlertToast?.visiblity &&  <DisplayAlert />}
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
