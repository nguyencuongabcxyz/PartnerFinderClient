import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../../_actions/authActions';
import { toast } from 'react-toastify';
import '../../assets/css/loginRegisterForm.css';

class Login extends React.Component {
    currentStatusCode = 0;
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="alert alert-danger" style={{ marginTop: '5px', borderRadius:'20px', fontWeight: 'bold' }}>
                    {error}
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta, type, hint}) => {
        const validateClassName = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`
        return (
            <div>
            <div className="form-group">
                <label htmlFor={input.name}>{label}</label>
                <input type={type}  placeholder={hint} className={validateClassName}  {...input} />
            </div>
            {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.loginUser(formValues.userName, formValues.password);
        this.currentStatusCode = 0;
    }

    handleAuthenticationResult() {
        if(this.currentStatusCode !== this.props.auth.statusCode){
        switch(this.props.auth.statusCode) {
            case 400: 
                toast.warn('Incorrect username or password!');
                break;
            case 403:
                toast.info('Your account has been block!');
                break;
            case 500:
                toast.error('There are something wrong on server!');
                break;
            case 200:
                    toast.success('Login successfully!');
                break;
            case 0: 
                break;
            default:
                toast.info('There are something wrong, check your internet connection!');
                break;
        } 
        this.currentStatusCode = this.props.auth.statusCode;

    }
    }

    render() {
        
        this.handleAuthenticationResult();
        console.log(this.props.auth.statusCode);
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
                                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                    <Field name="userName" component={this.renderInput} hint="Type your user name" label="User name" type="text" />
                                    <Field name="password" component={this.renderInput} hint="Type your password" label="Password" type="password" />
                                    <button type="submit" className="btn btn-lg btn-primary btn-login">SIGN IN</button>
                                    <p className="login-options-text">Or login with</p>
                                    <div className="login-options-images">
                                        <img alt="login-options" src="/Images/LoginPage/facebook_login.svg"/>
                                        <img alt="login-options" src="/Images/LoginPage/google_login.svg"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.userName) {
        errors.userName = 'You must enter a username!';
    }

    if(formValues.userName && formValues.userName.length < 4) {
        errors.userName = 'Username must be at least 4 characters!';
    }

    if (!formValues.password) {
        errors.password = 'You must enter a password!';
    }

    if(formValues.password && formValues.password.length < 4) {
        errors.password = 'Password must be at least 4 characters!';
    }

    return errors;
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default reduxForm({
    form: 'signIn',
    validate
})(connect(mapStateToProps, { loginUser })(Login));