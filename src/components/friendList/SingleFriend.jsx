import React from 'react';
import "./chat.css";

import {  Avatar } from "@mui/material";

const SingleFriend = ({detail}) => {
  const {image,id, userName,time,message}= detail;
  return (
    <div className="single" key={id}>
      
    <div className="single-1">
      <Avatar
        sx={{ bgcolor: "blue", mr: 1 }}
        alt="Remy Sharp"
        src={image}
      >
        B
      </Avatar>

      <div className='single-details'>
        <h3 >{userName}</h3>
        <p>{message} </p>
      </div>
    </div>
    <p>{time}</p>
  </div>
  )
}

export default SingleFriend;