import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Bar from '../../components/Sidebar/SideBar';
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import IP_ADDRESS from '../../api/IPAddress';

const socket = io(`${IP_ADDRESS}`);

const CommonLayout = ({ component }) => {

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

export default CommonLayout;
export {socket};