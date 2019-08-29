import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './style.css'

class FilterForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="row">
                <div className="form-group filter-item col-lg-6">
                <label>Level</label>
                <Field className="custom-select" name="level" component="select">
                    <option>Choose level</option>
                    <option value="0">Beginner</option>
                    <option value="1">Intermidiate</option>
                    <option value="2">Advanced</option>
                </Field>
                </div>
                <div className="form-group col-lg-6">
                <label>Location</label>
                <Field className="form-control" name="location" component='input'/>
                </div>
                </div>
                <button type="submit" className="btn btn-info btn-filter">Filter</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'filterForm'
})(FilterForm);

