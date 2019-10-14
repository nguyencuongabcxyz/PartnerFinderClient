import React from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import './style.css';
import LocationInput from '../../shared/LocationInput';

class FilterForm extends React.Component {

    setValue = (value) => {
        this.props.dispatch(change('filterForm', 'location', value));
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h1 className="dashboard-title">People looking for partners</h1>
                <div className="row">
                    <div className="form-group filter-item col-lg-6">
                        <label>Level</label>
                        <Field className="custom-select" name="level" component="select">
                            <option value="3">Choose level</option>
                            <option value="0">Beginner</option>
                            <option value="1">Intermediate</option>
                            <option value="2">Advanced</option>
                        </Field>
                    </div>
                    <LocationInput setValue={this.setValue} additionalClasses="col-lg-6"/>
                </div>
                <button type="submit" className="btn btn-warning btn-filter">Filter</button>
            </form>
        );
    }
}

FilterForm = reduxForm({
    form: 'filterForm'
})(FilterForm);

export default connect(state => ({
    initialValues: {
        location: '',
        level: 3
    }
}))(FilterForm);

