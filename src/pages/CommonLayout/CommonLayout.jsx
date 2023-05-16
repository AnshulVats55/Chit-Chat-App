import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Bar from "../../components/Sidebar/SideBar";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import BASE_URL from '../../api/services/BaseUrl';
const userToken = localStorage.getItem("token");


let socket;
const CommonLayout = ({ component }) => {

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userId = userDetails?.data?.user.id;

  const userFullName =userDetails?.data?.user.firstName + " " + userDetails?.data?.user.lastName;
  socket = io(`${BASE_URL}`)
  // socket = io(`${BASE_URL}`,{
  //   auth:{
  //     token:userToken
  
  //   },
  //   query:{
  //     id:userId
  //   }
  // });


  socket.emit("newUser", { id: userId, name: userFullName });

  return (
    <>
      <Navbar />
      <Bar />
      {component}
    </>
  );

};

export default CommonLayout;
export { socket };
