import React from 'react';
import Footer from '../Footer';
import NavigationBar from '../NavigationBar';
import './style.css';

const PageLayout = (props) => {
    return (
        <div>
            <div id="header">
                <NavigationBar />
            </div>
            <div id="content-body">
                {props.children}
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    );
}

export default PageLayout;