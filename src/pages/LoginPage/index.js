import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../../_actions/authActions';

class LoginPage extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="alert alert-danger" style={{ marginTop: '5px' }}>
                    {error}
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta, type }) => {
        //const validateClassName = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`
        return (
            <div></div>
            // <div className="form-group">
            //     <label htmlFor={input.name}>{label}</label>
            //     <input type={type} id={input.name} className={validateClassName}  {...input} />
            //     {this.renderError(meta)}
            // </div>
        );
    }

    handleAuthenticationResult = () => {
        console.log(this.props.auth.statusCode);
        switch (this.props.auth.statusCode) {
            case 200:
                alert('Login successfully!');
                break;
            case 400:
                alert('Incorrect username or password!');
                break;
            case 403:
                alert('This user is blocked!');
                break;
            case 500:
                alert('There some errors occured on server!');
                break;
            default:
                break;
        }
    }

    onSubmit = (formValues) => {
        this.props.loginUser(formValues.userName, formValues.password);
    }

    render() {
        console.log('render!');
        //this.handleAuthenticationResult();
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

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default reduxForm({
    form: 'signIn',
    validate
})(connect(mapStateToProps, { loginUser })(LoginPage));