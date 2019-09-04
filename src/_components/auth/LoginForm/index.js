import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {

    state = {
        loading : false
    }
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="alert alert-danger" style={{ marginTop: '5px', borderRadius: '20px', fontWeight: 'bold' }}>
                    {error}
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta, type, hint }) => {
        const validateClassName = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`
        return (
            <div>
                <div className="form-group">
                    <label htmlFor={input.name}>{label}</label>
                    <input type={type} placeholder={hint} className={validateClassName}  {...input} />
                </div>
                {this.renderError(meta)}
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field name="userName" component={this.renderInput} hint="Type your user name" label="User name" type="text" />
                <Field name="password" component={this.renderInput} hint="Type your password" label="Password" type="password" />
                <button type="submit" className="btn btn-lg btn-primary btn-login">SIGN IN</button>
                {this.props.children}
                <p className="login-options-text">Or login with</p>
                <div className="login-options-images">
                    <img alt="login-options" src="/Images/LoginPage/facebook_login.svg" />
                    <img alt="login-options" src="/Images/LoginPage/google_login.svg" />
                </div>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.userName) {
        errors.userName = 'You must enter a username!';
    }

    if (formValues.userName && formValues.userName.length < 4) {
        errors.userName = 'Username must be at least 4 characters!';
    }

    if (!formValues.password) {
        errors.password = 'You must enter a password!';
    }

    if (formValues.password && formValues.password.length < 4) {
        errors.password = 'Password must be at least 4 characters!';
    }

    return errors;
};

export default reduxForm({
    form: 'signIn',
    validate
})(LoginForm);