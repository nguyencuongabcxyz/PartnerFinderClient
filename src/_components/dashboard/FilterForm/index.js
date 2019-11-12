import React from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import './style.css';
import LocationInput from '../../shared/LocationInput';
import { Dropdown } from 'semantic-ui-react'


class FilterForm extends React.Component {

    setLocationValue = (value) => {
        this.props.dispatch(change('filterForm', 'location', value));
    }

    setLevelValue = (event, {value}) => {
        this.props.dispatch(change('filterForm', 'level', value));
    }

    renderSelectInput = () => {
        const options = [{
            key: 0,
            value: 0,
            text: "Beginner"
        },
        {
            key: 1,
            value: 1,
            text: "Intermediate"
        },
        {
            key: 2,
            value: 2,
            text: "Advanced"
        }]
        return (
            <Dropdown
            placeholder='Select level'
            fluid
            selection
            onChange={this.setLevelValue}
            options={options}
          />
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h1 className="dashboard-title">People looking for partners</h1>
                <div className="row">
                    <div className="form-group filter-item col-lg-6">
                        <label>Level</label>
                        {this.renderSelectInput()}
                    </div>
                    <div className="col-lg-6">
                    <LocationInput setValue={this.setLocationValue}/>
                    </div>
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

