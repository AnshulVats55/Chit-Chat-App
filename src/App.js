import React from "react";



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Comments from './components/simple-comments/Comments'
import FeedLayout from "./components/FeedLayout";
function App() {
  return (
    <Router>

      <Routes>
      

        <Route exact path="/feed" element={<FeedLayout />} />
        <Route exact path="/" element={<Comments />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
