import React from 'react'
import PageLayout from '../PageLayout'
import './style.css'
import BasicButton from '../shared/BasicButton';
import { Link } from 'react-router-dom';
import { userService } from '../../_services/userService';
import { extractTokenService } from '../../_services/extractTokenService';
import history from '../../history';

class CheckInfo extends React.Component {

    state = {
        isHavingInfo : false,
        isHavingLevel : false
    }

    customStyleButton = {
        background : '#FFEAA7',
        border: 'none',
        color: 'black',
        display: 'block',
        margin: '0 auto',
    }

    async componentDidMount() {
        const checkUserResult = await userService.checkUserInfoAfterLogin(extractTokenService.extractUserId())
        this.setState({
            isHavingInfo: checkUserResult.isHavingInfo,
            isHavingLevel: checkUserResult.isHavingLevel
        })
    }

    render() {
        let testCardClasses = this.state.isHavingLevel ? 'card hidden' : 'card';
        let infoCardClasses = this.state.isHavingInfo ? 'card hidden' : 'card';
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
                            Update information
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Update your information </h5>
                            <p className="card-text">Update your information to help you impress other people and get a high chance to meet your ideal partner</p>
                            <Link to={"/testintro"} className="right-btn btn btn-warning" >Update information</Link>
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