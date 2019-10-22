import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../../_actions/auth';
import { toast } from 'react-toastify';
import '../../../assets/css/loginRegisterForm.css';
import LoginForm from '../LoginForm';
import ClipLoader from 'react-spinners/ClipLoader';

class Login extends React.Component {

    onSubmit = (formValues) => {
        document.getElementById('spinner-login').style.display = 'flex';
        this.props.loginUser(formValues.userName, formValues.password);
    }

    componentDidMount

    handleAuthenticationResult() {
        if(!document.getElementById('spinner-login')){
            return;
        }
        switch (this.props.auth.statusCode) {
            case 400:
                toast.warn('Incorrect username or password!');
                document.getElementById('spinner-login').style.display = 'none';
                break;
            case 403:
                toast.info('Your account has been block!');
                document.getElementById('spinner-login').style.display = 'none';
                break;
            case 500:
                toast.error('There are something wrong on server!');
                document.getElementById('spinner-login').style.display = 'none';
                break;
            case 200:
                toast.success('Login successfully!');
                document.getElementById('spinner-login').style.display = 'none';
                break;
            case 0:
                break;
            default:
                toast.info('There are something wrong, check your internet connection!');
                document.getElementById('spinner').style.display = 'none';
                break;
        }
    }
    render() {
        this.handleAuthenticationResult();
        return (
            <div>
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Sign In
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span className="close-icon" aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <LoginForm onSubmit={this.onSubmit} >
                                    <div id="spinner-login" style={{ display: 'none', marginTop: '30px', justifyContent: 'center' }}>
                                        <ClipLoader
                                            sizeUnit={"px"}
                                            size={40}
                                            color={'#123abc'}
                                            loading={true}
                                        />
                                    </div>
                                </LoginForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { loginUser })(Login);