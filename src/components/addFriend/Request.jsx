import React from 'react';
import SearchFriend from './SearchFriend';
import FriendRequests from './FriendRequests';
// import { socket } from "../chatWindow/ChatWindow";
import { socket } from "../../pages/FinalLayout/FinalLayout";
import { useSelector } from "react-redux";
import { ListStyles } from "../friendList/FriendList.styles";



const Request = () => {
  const { classes } = ListStyles();
  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });
  
  const userId = userDetails.data.user.id;
  const userFullName =userDetails.data.user.firstName + " " + userDetails.data.user.lastName;
  socket.emit("newUser", { id: userId, name: userFullName });

  return (
    <div style={{width:"27%",textAlign:"center"}} className={classes.friendGrid}>
    <SearchFriend/>

    <FriendRequests/>
   
    </div>
  )
}

export default Request