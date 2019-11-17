import React from 'react';
import location from '../../assets/json-data/location.json';
import { Dropdown } from 'semantic-ui-react';

class LocationInput extends React.Component {
    
    setValueForLocationField = (event, {value}) => {
        this.props.setValue(value);
    }

    render() {
      const { defaultValue, placeholder } = this.props;
        return (
          <div className="form-group">
            <label>Location</label>
            <Dropdown
              placeholder={placeholder}
              fluid
              search
              selection
              onChange={this.setValueForLocationField}
              options={location.cities}
              defaultValue={defaultValue}
            />
          </div>
        );
    }
}

export default LocationInput;