import React from 'react';
import Footer from '../Footer';
import NavigationBar from '../NavigationBar';
import './style.css';

const PageLayout = () => {
    return (
        <div>
            <div id="header">
                <NavigationBar />
            </div>
            <div id="content-body">

            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    );
}

export default PageLayout;