import React, { useEffect } from 'react';
import FinalLayout from './pages/FinalLayout/FinalLayout';
import CreateAccount from '../src/pages/SignupPage/CreateAccount';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfilePage from './pages/ProfilePage/ProfilePage';
import FeedPage from '../src/pages/FeedPage/FeedPage';
import ViewPost from './components/ViewPost/ViewPost';
import FeedLayout from '../src/components/FeedLayout';
import { Posts } from './components/post/Posts';
import Comments from './components/simple-comments/Comments';
import CommentWindow from './components/simple-comments/ CommentWindow';
function App() {

    return (
        <>
            <Router>
                <Routes>
                    {
                        localStorage.getItem("token")
                        ?
                        <>
                            <Route exact path="/" element={<FinalLayout component={<Posts />} />} />
                            <Route exact path="/profile" element={<FinalLayout component={<ProfilePage />}/>} />
                            <Route exact path="/post" element={<FinalLayout component={<ViewPost />} />} />
                            <Route exact path='/comment' element={<Comments />}></Route>
                            <Route exact path='/commentWindow' element={<CommentWindow />}></Route>
                        </>
                        :
                        <>
                            <Route exact path="/" element={<LoginPage />} />
                            <Route exact path="/signup" element={<CreateAccount />} />
                        </>
                    }
                </Routes>
            </Router>
            {/* <Router>
                <Routes>
                    <Route exact path='/' element={<Comments/>}></Route>
                </Routes>
            </Router> */}
        </>
    );
}

export default App;
