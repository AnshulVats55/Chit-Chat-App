import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FinalLayout from '../../pages/FinalLayout/FinalLayout';
import CreateAccount from '../../pages/SignupPage/CreateAccount';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ViewPost from '../../components/ViewPost/ViewPost';
import { Posts } from '../../components/post/Posts';
import Comments from '../../components/simple-comments/Comments';
import CommentWindow from '../../components/simple-comments/ CommentWindow';
import ChatPage from '../../pages/ChatPage';
import Request from '../addFriend/Request';
import Toast from '../../components/NotificationToast/NotificationToast';
import DisplayAlert from '../AlertBox/DisplayAlert';
import ListOfFriend from '../ProfileFriendList/ListOfFriend'

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                {
                    localStorage.getItem("token")
                    ?
                    <>
                        <Route exact path="/" element={<FinalLayout component={<Posts />} />} />
                        <Route exact path="/profile" element={<FinalLayout component={<ProfilePage />} />} />
                        <Route exact path="/post" element={<FinalLayout component={<ViewPost />} />} />
                        <Route exact path='/comment' element={<Comments />}></Route>
                        <Route exact path='/commentWindow' element={<CommentWindow />}></Route>
                        <Route exact path="/chat" element={<FinalLayout component={<ChatPage />} />} />
                    </>
                    :
                    <>
                        <Route exact path="/" element={<LoginPage />} />
                        <Route exact path="/signup" element={<CreateAccount />} />
                    </>
                }
                <Route exact path="/alert" element={<DisplayAlert />} />
                <Route exact path="/list" element={<ListOfFriend />} />
            </Routes>
        </Router>
    );
}

export default AllRoutes;