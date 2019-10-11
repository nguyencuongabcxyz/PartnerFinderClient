import React from 'react';
import BasicButton from '../../shared/BasicButton';
import './style.css';

const customStyleBasicButtonSection4 = {
    background: 'none',
    border: '1px solid',
    color: 'white',
}

const Footer = () => {
    return (
        <div id="footer-content">
            <div id="footer-flex-container">
                <div id="first-part">
                    <h2>About us</h2>
                    <p>While you don’t have to use any specific library to integrate Bootstrap with React apps</p>
                </div>
                <div id="center-part">
                    <h2>Contact us</h2>
                    <div id="contact-item">
                        <a href="https://www.facebook.com/profile.php?id=100005185776957"><img alt="contact-icon" src="/Images/HomePage/facebook.svg"></img>Facebook</a>
                        <a href="https://www.instagram.com/nguyencuong1111/"><img alt="contact-icon" src="/Images/HomePage/instagram.svg"></img>Instagram</a>
                        <p><img alt="contact-icon" src="/Images/HomePage/email.svg"></img>nguyencuongoc@gmail.com</p>
                        <p><img alt="contact-icon" src="/Images/HomePage/phone.svg"></img>+84969087853</p>
                    </div>
                </div>
                <div id="third-part">
                    <BasicButton isLoginButton={true} customStyles={customStyleBasicButtonSection4} content="Join us" />
                </div>
            </div>
            <div id="footer-end-text" style={{ textTransform: 'uppercase', fontWeight: '600', position: 'absolute', bottom: '0', width: '100%', textAlign: 'center', paddingBottom: '20px' }}>Copyright by partnerfinder.com.vn 2019</div>
        </div>
    );
}

export default Footer;