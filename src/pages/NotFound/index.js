import React from 'react'
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img alt="error" src={process.env.PUBLIC_URL + "/images/HomePage/404.png"}/>
            <Link style={{fontSize: '30px', color: '#rgb(93,189,217)', fontWeight: 'bold'}} to={"/"}>Home</Link>
        </div>
    );
}

export default NotFound;