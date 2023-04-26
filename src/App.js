import React from 'react';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import CreateAccount from '../src/pages/SignupPage/CreateAccount';
import ProfilePage from '../src/pages/ProfilePage/ProfilePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FeedLayout from './components/Layout/FeedLayout'
import Bar from './components/SidebarNew/Bar';
import ChatLayout from './components/Layout/ChatLayout'

function App() {
    return (     
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/feed" element={<FeedLayout />}/>
            <Route exact path="/bar" element={<Bar />}/>
            <Route exact path="/signup" element={<CreateAccount />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            {/* <Route exact path="/comments" element={<Comments />} /> */}
          </Routes>
        </Router>
    );
}

export default App;
