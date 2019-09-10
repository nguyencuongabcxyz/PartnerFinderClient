import React from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import './style.css';
import location from '../../../assets/json-data/location.json';

class FilterForm extends React.Component {


    state = {
        suggestedList: []
    }

    componentDidMount() {

        const wrapper = document.getElementById('suggestion-wrapper');
        const locationInput = document.getElementById('location');
        window.onclick = (event) => {
            if(event.target !== wrapper && event.target !== locationInput) {
                this.setState({
                    suggestedList: []
                })
            } 
        }
    }

    findLocationsWithKey = (key) => {
        if (key.length <= 3) {
            this.setState({
                suggestedList: []
            });
            return;
        }
        const lowerCaseKey = key.toLowerCase();        
        let matchedCitys = [];
        location.citys.forEach(item => {
            if (item.slug.toLowerCase().includes(lowerCaseKey)) {
                matchedCitys.push(item.slug);
            }
        });
        this.setState({
            suggestedList: matchedCitys
        });
    }

    clearSuggestion = (e) => {

        this.setState({
            suggestedList: []
        });
    }

    renderInput = ({ input }) => {
        return <input id="location" autoComplete="off" className="form-control"
            {...input}
            onKeyUp={() => { this.findLocationsWithKey(input.value) }}
            onFocus={() => { this.findLocationsWithKey(input.value) }}
        />
    }

    setValueForLocationField = (value) => {
        this.props.dispatch(change('filterForm', 'location', value));
        this.setState({
            suggestedList: []
        })
    }

    renderSuggestion = (array) => {
        return array.map(item => {
            return (
                <div key={item} onClick={() => { this.setValueForLocationField(item) }} className="suggested-item">{item}</div>
            );
        });
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="row">
                    <div className="form-group filter-item col-lg-6">
                        <label>Level</label>
                        <Field className="custom-select" name="level" component="select">
                            <option value="3">Choose level</option>
                            <option value="0">Beginner</option>
                            <option value="1">Intermidiate</option>
                            <option value="2">Advanced</option>
                        </Field>
                    </div>
                    <div className="form-group col-lg-6">
                        <label>Location</label>
                        <div style={{ position: 'relative' }}>
                            <Field className="form-control" name="location" component={this.renderInput} />
                            <div id="suggestion-wrapper" style={{ position: 'absolute', width: '100%', zIndex: "100" }} >
                                {this.renderSuggestion(this.state.suggestedList)}
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-info btn-filter">Filter</button>
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

