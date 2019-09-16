import React from 'react';
import { Field, reduxForm, change } from 'redux-form';
import './style.css';
import LocationInput from '../../shared/LocationInput';

class UserInfoForm extends React.Component {

    renderError({ error, touched }) {
        const errorStyles = {
            borderRadius: '2px',
            fontWeight: 'bold',
            width: '90%',
            margin: '5px auto 0px'
        }
        if (touched && error) {
            return (
                <div className="alert alert-danger" style={errorStyles}>
                    {error}
                </div>
            );
        }
    }

    renderTextArea = ({ input, label, placeholder }) => {
        return (
            <div className="form-group info-group">
                <label>{label}</label>
                <textarea {...input} placeholder={placeholder} className="form-control" />
            </div>
        );
    }

    renderInputText = ({ input, label, placeholder, type, meta }) => {
        return (
            <div>
            <div className="form-group info-group">
                <label>{label}</label>
                <input type={type} className="form-control" placeholder={placeholder} {...input} />
            </div>
            {this.renderError(meta)}
            </div>
        );
    }

    setValue = (value) => {
        this.props.dispatch(change('userInfoForm', 'location', value));
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h1 id="user-form-title">Update information</h1>
                <Field name="name" component={this.renderInputText} label="Name" placeholder="Enter name"/>
                <LocationInput setValue={this.setValue} additionalClasses="info-group"/>
                <Field type="number" name="age" component={this.renderInputText} label="Age" placeholder="Enter a number"/>
                <div className="form-group info-group">
                    <label>Level</label>
                    <Field className="custom-select" name="level" component="select">
                    <option value="3">Choose level</option>
                    <option value="0">Beginner</option>
                    <option value="1">Intermediate</option>
                    <option value="2">Advanced</option>
                </Field>
                </div>
                <Field name="hobbies" component={this.renderTextArea} label="Hobbies" placeholder="Enter hobbies" />
                <Field name="introduction" component={this.renderTextArea} label="Introduction" placeholder="Enter introduction"/>
                <Field name="englishSkill" component={this.renderTextArea} label="English skills" placeholder="Enter your english skills"/>
                <Field name="learningSkill" component={this.renderTextArea} label="Skills want to learn" placeholder="Enter skills you want to learn"/>
                <Field name="expectation" component={this.renderTextArea} label="Expectation for partners" placeholder="Enter your expectation for partners"/>
                <button type="submit" className="btn btn-danger btn-submit">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(formValues.name && formValues.name.length > 20){
        errors.name = 'Name must be less than 20 characters!';
    }
    return errors;
};

export default reduxForm({
    form: 'userInfoForm',
    validate
})(UserInfoForm);