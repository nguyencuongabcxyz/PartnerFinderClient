import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login }  from '../../_actions/authActions';

class LoginPage extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="alert alert-danger" style={{marginTop: '5px'}}>
                    {error}
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta, type }) => {
        const validateClassName = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`
        return (
            <div className="form-group">
                <label htmlFor={input.name}>{label}</label>
                <input type={type} id={input.name} className={validateClassName}  {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.login(formValues.userName, formValues.password);
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Login Information
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                    <Field name="userName" component={this.renderInput} label="User name:" type="text" />
                                    <Field name="password" component={this.renderInput} label="Password:" type="password" />
                                    <button type="submit" className="btn btn-lg btn-primary">Login</button>
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

    if (!formValues.password) {
        errors.password = 'You must enter a password!';
    }

    return errors;
};

export default reduxForm({
    form: 'signIn',
    validate
})(connect(null, {login})(LoginPage));