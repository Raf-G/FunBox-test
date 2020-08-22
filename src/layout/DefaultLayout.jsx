import React from 'react';
const DefaultLayout = (props) => {
    return (
        <div>
            <div className="bg_shadow"></div>
            <h1>{props.header}</h1>
            <div>{props.children}</div>
        </div>
    );
};

export default DefaultLayout;