import React from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import BASE_URL from '../../api/services/BaseUrl';

let socket;

const CommonLayout = ({ component }) => {

  const userToken = localStorage.getItem("token");

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userId = userDetails?.data?.user.id;
  
  socket = io(`${BASE_URL}`,{
    auth:{
      token: userToken
    },
    query:{
      id: userId
    }
  });

    return (
        <>
            {component}
        </>
    );
}

export default CommonLayout;
export { socket };
