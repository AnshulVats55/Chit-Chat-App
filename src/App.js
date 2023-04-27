import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from '../src/components/navbar/Navbar';


import Comments from './components/nested-comments/Comment'
import FeedLayout from "./components/FeedLayout";
import CreatePost from "./components/post/createPost/CreatePost";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route exact path="/" element={<FeedLayout />} />
     
        <Route exact path="/comment" element={<CreatePost/>} />
      </Routes>
    </Router>
  );
}

export default App;
