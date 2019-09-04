import React from 'react';
import { Field, reduxForm } from 'redux-form';
import $ from 'jquery';

class RegisterForm extends React.Component {

    toggleForm () {
        $('#registerModal').modal('hide');
        $('#loginModal').modal('show');
    }

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
            <Field name="email" component={this.renderInput} hint="Type your email" label="Email" type="email" />
            <Field name="password" component={this.renderInput} hint="Type your password" label="Password" type="password" />
            <Field name="confirmPassword" component={this.renderInput} hint="Type your password again" label="Confirm password" type="password" />
            <button id="btn-signup" type="submit" className="btn btn-lg btn-primary btn-login">SIGN UP</button>
            {this.props.children}
            <div style={{display: 'flex', marginTop: '30px', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{marginTop: '0px', marginBottom: '0px', marginRight: '7px'}} className="login-options-text">Already registered?</p>
            <button onClick={() => {this.toggleForm()}} type="button" style={{height: '25px', width: '80px', background: '#8c7ae6', border: 'none', borderRadius: '20px', color: 'white', fontWeight: 'bold'}}>sign in</button>
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

export default reduxForm({
    form: 'signUp',
    validate
})(RegisterForm)