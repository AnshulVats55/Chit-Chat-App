import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Bar from '../../components/SidebarNew/Bar';

import { io } from "socket.io-client";
import { useSelector } from "react-redux";
const socket = io("http://192.168.1.110:8484");

const FinalLayout = ({ component }) => {
    return (
        <>
            <Navbar />
            <Bar />
            {component}
        </>
    );
}

export default FinalLayout;