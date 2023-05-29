import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommonLayout from "../../pages/CommonLayout/CommonLayout";
import Navbar from "../../components/navbar/Navbar";
import Bar from "../../components/Sidebar/SideBar";
import CreateAccount from "../../pages/SignupPage/CreateAccount";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import { Posts } from "../../components/Post/Posts";
import ChatPage from "../../pages/ChatPage";
import CustomizedSnackBars from "../SnackBar/CustomizedSnackBars";

const AllRoutes = () => {
  return (
    <Router>
      <CustomizedSnackBars />
      {localStorage.getItem("token") ? (
        <>
          <Navbar />
          <Bar />
          <Routes>
            <Route
              exact
              path="/"
              element={<CommonLayout component={<Posts />} />}
            />
            <Route
              exact
              path="/profile"
              element={<CommonLayout component={<ProfilePage />} />}
            />
            <Route
              exact
              path="/chat"
              element={<CommonLayout component={<ChatPage />} />}
            />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/signup" element={<CreateAccount />} />
        </Routes>
      )}
    </Router>
  );
};

export default AllRoutes;
