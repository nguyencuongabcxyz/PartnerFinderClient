import React from 'react'

const ScreenLoader = () => {
    return (
        <div class="ui active dimmer" style={{position: "fixed"}}>
            <div class="ui text loader">Loading...</div>
        </div>
    );
};

export default ScreenLoader;