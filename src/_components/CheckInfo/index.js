import React from 'react'
import PageLayout from '../layout/PageLayout'
import './style.css'
import BasicButton from '../shared/BasicButton';
import { Link } from 'react-router-dom';
import { userService } from '../../_services/userService';
import history from '../../history';

class CheckInfo extends React.Component {

    state = {
        completedInfoPercentage : 0,
        isHavingLevel : false
    }

    customStyleButton = {
        background : '#F8B906',
        border: 'none',
        color: 'black',
        display: 'block',
        margin: '0 auto',
    }

    async componentDidMount() {
        const checkUserResult = await userService.checkUserInfoAfterLogin()
        if(checkUserResult){
        this.setState({
            completedInfoPercentage: checkUserResult.completedInfoPercentage,
            isHavingLevel: checkUserResult.isHavingLevel
        })
    }
    }

    render() {
        let testCardClasses = this.state.isHavingLevel ? 'card hidden' : 'card';
        let infoCardClasses = this.state.completedInfoPercentage === 100 ? 'card hidden' : 'card';
        return (
            <PageLayout>
                <div id="check-info">
                    <h1>Getting started!</h1>
                    <p>There some steps you should do before explorer english world!</p>
                    <div id="check-block">
                    <div className={testCardClasses}>
                        <div className="card-header">
                            Take a test
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Take a test to get your level</h5>
                            <p className="card-text">With our random tests, we help you determine your level so that you can easily find out your appropriate partner.Or you can set your later by updating your information</p>
                            <Link to={"/testintro"} className="right-btn btn btn-warning" >Take a test</Link>
                        </div>
                    </div>
                    <div className={infoCardClasses}>
                        <div className="card-header">
                            Update more information
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.completedInfoPercentage}% your information have been updated!</h5>
                            <div className="progress">
                            <div className="progress-bar bg-danger" style={{width: `${this.state.completedInfoPercentage}%`}} role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="card-text">Update your information to help you impress other people and get a high chance to meet your ideal partner</p>
                            <Link to={"/updateinfo"} className="right-btn btn btn-warning" >Update information</Link>
                        </div>
                    </div>
                    </div>
                    <h4 id="direct-text">Or you can directly</h4>
                    <BasicButton onClick={() => {history.push('/dashboard')}} content="Get to dashboard page" customStyles={this.customStyleButton} />
                </div>
            </PageLayout>
        );
    }
}

export default CheckInfo;