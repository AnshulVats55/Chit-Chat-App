import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Bar from '../../components/SidebarNew/Bar';

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