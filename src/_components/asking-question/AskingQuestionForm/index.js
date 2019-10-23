import React from 'react';
import { Field, reduxForm, change } from 'redux-form';

class AskingQuestionForm extends React.Component {
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
        console.log(meta);
        renderContentError(error);
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
        this.props.dispatch(change('asking-form', 'title', title));
    }

    setValueForContent = (content) => {
        this.props.dispatch(change('asking-form', 'content', content));
    }

    render() {
        return (
            <form id="create-question-form" onSubmit={this.props.handleSubmit} ref={(el) => { this._form = el; }}>
                <Field name="title" component={this.renderTitleInput} />
                <Field name="content" component={this.renderContentInput} />
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

    if (formValues.title && formValues.title.length > 200) {
        errors.title = 'Title can not exceed 200 characters!';
    }

    if (formValues.content && formValues.content.length > 1000) {
        errors.content = 'Content can not exceed 1000 characters!';
    }

    return errors;
};


export default reduxForm({
    form: 'asking-form',
    validate
})(AskingQuestionForm);