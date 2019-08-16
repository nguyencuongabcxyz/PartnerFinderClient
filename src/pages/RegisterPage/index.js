import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { registerUser } from '../../_actions/registrationAction';
import '../../assets/css/loginRegisterForm.css';
import $ from 'jquery';

class RegisterPage extends React.Component {

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
                <input type={type} id={input.name} placeholder={hint} className={validateClassName}  {...input} />
            </div>
            {this.renderError(meta)}
            </div>
        );
    }

    toggleForm () {
        $('#registerModal').hide()
        let modalBackdrops = document.getElementsByClassName('modal-backdrop');
        document.body.removeChild(modalBackdrops[0]);
    }

    onSubmit = (formValues) => {
        this.props.registerUser(formValues);
    }

    handleAuthenticationResult() {
        let display = 'none';
        let responseMessage = '';

        switch(this.props.auth.statusCode) {
            case 400: 
                display = 'block';
                responseMessage = 'Incorrect username or password!';
                break;
            case 403:
                display = 'block';
                responseMessage = 'Your account has been block!';
                break;
            case 500:
                display = 'block';
                responseMessage = 'There are something wrong on server!';
                break;
            default:
                break;
        } 
        return {display, responseMessage};
    }

    render() {
        
        //let {display, responseMessage} = this.handleAuthenticationResult();

        return (
            <div>
                <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Sign Up
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span className="close-icon" aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* <div className="alert alert-danger" style={{display: `${display}`}}>
                                    <strong>Warning!</strong> {responseMessage}
                                </div> */}
                                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                    <Field name="userName" component={this.renderInput} hint="Type your user name" label="User name" type="text" />
                                    <Field name="email" component={this.renderInput} hint="Type your email" label="Email" type="email" />
                                    <Field name="password" component={this.renderInput} hint="Type your password" label="Password" type="password" />
                                    <Field name="confirmPassword" component={this.renderInput} hint="Type your password again" label="Confirm password" type="password" />
                                    <button type="submit" className="btn btn-lg btn-primary btn-login">SIGN UP</button>
                                    <div style={{display: 'flex', marginTop: '30px', justifyContent: 'center', alignItems: 'center'}}>
                                    <p style={{marginTop: '0px', marginBottom: '0px', marginRight: '7px'}} className="login-options-text">Already registered?</p>
                                    <button onClick={() => {this.toggleForm()}} type="button" data-toggle="modal" data-target="#loginModal" style={{height: '25px', width: '80px', background: '#8c7ae6', border: 'none', borderRadius: '20px', color: 'white', fontWeight: 'bold'}}>sign in</button>
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

    if(!formValues.email) {
        errors.email = 'You must enter an email!';
    }

    if(formValues.password && formValues.confirmPassword && formValues.password !== formValues.confirmPassword) {
        errors.confirmPassword = 'Confirm password does not match!'
    }

    if (!formValues.confirmPassword) {
        errors.confirmPassword = 'You must enter a confirm password!';
    }

    return errors;
};

const mapStateToProps = (state) => {
    return {
        registrationResult: state.registrationResult
    }
}

export default reduxForm({
    form: 'signUp',
    validate
})(connect(mapStateToProps, { registerUser })(RegisterPage));