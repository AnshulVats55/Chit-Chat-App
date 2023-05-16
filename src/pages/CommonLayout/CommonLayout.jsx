import React from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import BASE_URL from '../../api/services/BaseUrl';

let socket;
const CommonLayout = ({ component }) => {

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userId = userDetails?.data.user.id;

  const userFullName =userDetails?.data.user.firstName + " " + userDetails.data.user.lastName;
  socket = io(`${BASE_URL}`)

  socket.emit("newUser", { id: userId, name: userFullName });

    return (
        <>
            {component}
        </>
    );
}

export default CommonLayout;
export { socket };
