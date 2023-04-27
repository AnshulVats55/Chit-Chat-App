import React from 'react';

const Trial = ({ encodedUrl }) => {
    return (
        <>
        <div>Image preview</div>
        <img src={encodedUrl} alt="" />
        </>
        
    );
}

export default Trial;