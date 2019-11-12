import React from 'react';
import { Field } from 'redux-form';
import location from '../../assets/json-data/location.json';
import { Dropdown } from 'semantic-ui-react';

class LocationInput extends React.Component {

    // state = {
    //     suggestedList: []
    // }

    // suggestionWrapperStyles = {
    //     position: 'absolute', 
    //     width: '100%', 
    //     zIndex: "100",
    //     borderRadius: '10px'
    // }

    
    // componentDidMount() {
    //     const wrapper = document.getElementById('suggestion-wrapper');
    //     const locationInput = document.getElementById('location');
    //     window.onclick = (event) => {
    //         if(event.target !== wrapper && event.target !== locationInput) {
    //             this.setState({
    //                 suggestedList: []
    //             })
    //         } 
    //     }
    // }

    // findLocationsWithKey = (key) => {
    //     if (key.length <= 3) {
    //         this.setState({
    //             suggestedList: []
    //         });
    //         return;
    //     }
    //     const lowerCaseKey = key.toLowerCase();        
    //     let matchedCities = [];
    //     location.cities.forEach(item => {
    //         if (item.slug.toLowerCase().includes(lowerCaseKey)) {
    //             matchedCities.push(item.slug);
    //         }
    //     });
    //     this.setState({
    //         suggestedList: matchedCities
    //     });
    // }

    // clearSuggestion = (e) => {
    //     this.setState({
    //         suggestedList: []
    //     });
    // }

    // renderInput = ({ input, placeholder }) => {
    //     return <input id="location" autoComplete="off" className="form-control" placeholder={placeholder}
    //         {...input}
    //         onKeyUp={() => { this.findLocationsWithKey(input.value) }}
    //         onFocus={() => { this.findLocationsWithKey(input.value) }}
    //     />
    // }

    
    setValueForLocationField = (event, {value}) => {
        this.props.setValue(value);
    }

    // renderSuggestion = (array) => {
    //     return array.map(item => {
    //         return (
    //             <div key={item} onClick={() => { this.setValueForLocationField(item) }} className="suggested-item">{item}</div>
    //         );
    //     });
    // }

    render() {
        // const borderStyles = { border: '2px solid wheat'};
        return (
          // <div className={`form-group ${this.props.additionalClasses}`}>
          //     <label>Location</label>
          //     <div style={{ position: 'relative' }}>
          //         <Field className="form-control" name="location" component={this.renderInput} placeholder="Enter 3 more characters" />
          //         <div id="suggestion-wrapper" style={ this.state.suggestedList.length === 0 ? this.suggestionWrapperStyles : {...this.suggestionWrapperStyles, ...borderStyles}} >
          //             {this.renderSuggestion(this.state.suggestedList)}
          //         </div>
          //     </div>
          // </div>
          <div className="form-group">
            <label>Location</label>
            <Dropdown
              placeholder="City - Province"
              fluid
              search
              selection
              onChange={this.setValueForLocationField}
              options={location.cities}
            />
          </div>
        );
    }
}

export default LocationInput;