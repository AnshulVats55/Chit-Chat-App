import React from 'react';
import '../src/css/style.css';
// import Navbar from './pages/Navbar';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FeedLayout from './components/Layout/FeedLayout'
import Bar from './components/SidebarNew/Bar';


function App() {
    return (
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/userlogin" element={<LoginPage />} />
           
            <Route exact path="/dashboard" element={<FeedLayout />}/>
            <Route exact path="/bar" element={<Bar />}/>
          </Routes>
        </Router>
    );
}

export default App;
