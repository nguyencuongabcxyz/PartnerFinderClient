import React from 'react';
import { Field, reduxForm } from 'redux-form';

class FilterForm extends React.Component {

    renderInput = ({input, type, label, min, max}) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input type={type}  {...input} min={min} max={max}/>
            </div>
        );
    }

    renderSelect = ({input, label}) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                <select>
                  <option value="Da Nang">Da Nang</option>
                  <option value="Ha Noi">Ha Noi</option>
                  <option value="Sai Gon">Sai Gon</option>
                </select>
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h3>Filter partner finder</h3>
                <Field name="age" component={this.renderInput} type="range" label="Age:" min="10" max="30"/>
                <Field name="level" component={this.renderInput} type="range" label="Level:" min="0" max="2"/>
                <Field name="location" component={this.renderSelect} label="Location"/>
                <button type="submit">Filter</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'filterForm'
})(FilterForm);

