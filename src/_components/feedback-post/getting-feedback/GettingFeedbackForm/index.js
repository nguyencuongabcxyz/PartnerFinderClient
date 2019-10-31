import React from 'react';
import { Field, change, reduxForm } from 'redux-form';

import './style.css';

class GettingFeedbackForm extends React.Component {


    renderTitleInput = ({input, meta}) => {
        const { renderTitleError } = this.props;
        const { error } = meta;
        renderTitleError(error);
        return (
            <div>
                <input {...input}/>
            </div>
        );
    }

    renderContentInput = ({input, meta}) => {
        const { renderContentError } = this.props;
        const { error } = meta;
        renderContentError(error);
        return (
            <div>
                <input {...input}/>
            </div>
        );
    }

    renderTypeInput = ({input, meta}) => {
        const { renderTypeError } = this.props;
        const { error } = meta;
        renderTypeError(error);
        return (
            <div>
                <input {...input}/>
            </div>
        );
    }

    renderOptionaltInput = ({input}) => {
        return (
            <div>
                <input {...input}/>
            </div>
        );
    }

    submitForm = () => {
        this._form.dispatchEvent(new Event("submit"));
    }

    setValueForTitle = (title) => {
        this.props.dispatch(change('feedback-form', 'title', title));
    }

    setValueForContent = (content) => {
        this.props.dispatch(change('feedback-form', 'content', content));
    }

    setValueForType = (type) => {
        this.props.dispatch(change('feedback-form', 'type', type));
    }

    setValueForVideo = (video) => {
        this.props.dispatch(change('feedback-form', 'video', video));
    }

    setValueForScript = (script) => {
        this.props.dispatch(change('feedback-form', 'script', script));
    }


    render() {
        return (
            <form id="create-feedback-form" onSubmit={this.props.handleSubmit} ref={(el) => { this._form = el; }}>
            <Field name="title" component={this.renderTitleInput} />
            <Field name="content" component={this.renderContentInput} />
            <Field name="type" component={this.renderTypeInput} />
            <Field name="script" component={this.renderOptionaltInput} />
            <Field name="video" component={this.renderOptionaltInput} />
        </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title!';
    }

    if (!formValues.content) {
        errors.content = 'You must enter some content!';
    }

    if (!formValues.type && formValues.type !== 0) {
        errors.type = 'You must choose a type!';
    }


    if (formValues.title && formValues.title.length > 200) {
        errors.title = 'Title can not exceed 200 characters!';
    }

    if (formValues.content && formValues.content.length > 2000) {
        errors.content = 'Content can not exceed 2000 characters!';
    }

    return errors;
};

export default reduxForm({
    form: 'feedback-form',
    validate
})(GettingFeedbackForm);