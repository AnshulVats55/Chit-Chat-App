import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import ChatWindow from './components/chatWindow'
import Friends from './components/friendList';
import ChatPage from './pages/chatPage';


function App() {
    return (     
        <Router>
          {/* <Navbar />
          <Bar/> */}
          <Routes>
            <Route exact path="/chat" element={<ChatWindow />} />
            <Route exact path="/friends" element={<Friends />} />
            <Route exact path="/chatPage" element={<ChatPage />} />
         
          </Routes>
        </Router>
    );
}

export default App;
