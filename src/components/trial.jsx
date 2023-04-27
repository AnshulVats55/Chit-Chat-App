import React from 'react';

const Trial = ({ url }) => {
    console.log(url);
    return (
        <div>
            <h1>Hello</h1>
            <img src={url} alt="" />
        </div>
    );
}

export default Trial;