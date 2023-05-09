import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Bar from '../../components/SidebarNew/Bar';

import { io } from "socket.io-client";
import { useSelector } from "react-redux";
const socket = io("http://172.16.1.135:8484");

const FinalLayout = ({ component }) => {

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userId = userDetails?.data.user.id;
  const userFullName =userDetails?.data.user.firstName + " " + userDetails.data.user.lastName;

 socket.emit("newUser", { id: userId, name: userFullName });
    return (
        <>
            <Navbar />
            <Bar />
            {component}
        </>
    );
}

export default FinalLayout;
export {socket};