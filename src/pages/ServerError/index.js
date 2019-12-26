import React from 'react';
import { removeModalBootstrap } from '../../_helpers/uiHelper';
import {Link} from 'react-router-dom';

const ServerError = () => {
    removeModalBootstrap();
    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0E5388'}}>
        <img alt="error" src={process.env.PUBLIC_URL + "/images/HomePage/500.png"}/>
        <Link style={{fontSize: '20px', color: '#rgb(93,189,217)'}} to={"/"}>Home</Link>
    </div>
    );
}

export default ServerError;