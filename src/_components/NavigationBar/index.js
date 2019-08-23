import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../_actions/authActions';

class NavigationBar extends React.Component {
    onLogout = () => {
        this.props.logoutUser();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <a className="navbar-brand" href="#">
                    <img alt="page-logo" src="/Images/HomePage/logo.svg" />
                    <p>PartnerFinder</p>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Ask question</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Get feedback</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Message</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Notification</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle right-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img alt="seting_icon" src="/Images/HomePage/setting_icon.svg" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">User information</a>
                                <a className="dropdown-item" href="#">User account</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" onClick={this.onLogout}>Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default connect(null, {logoutUser})(NavigationBar)