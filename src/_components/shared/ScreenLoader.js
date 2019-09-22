import React from 'react'

const ScreenLoader = () => {
    return (
        <div className="ui active dimmer" style={{position: "fixed"}}>
            <div className="ui text loader">Loading...</div>
        </div>
    );
};

export default ScreenLoader;