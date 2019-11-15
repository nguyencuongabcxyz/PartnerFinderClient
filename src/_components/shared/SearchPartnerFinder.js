import _ from "lodash";
import React, { Component } from "react";
import { Search, Message } from "semantic-ui-react";
import location from '../../assets/json-data/location.json';

const initialState = { 
    isLoading: false, 
    results: [], 
    value: "" 
};

class SearchPartnerFinder extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => this.setState({ value: result.name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    setTimeout(async () => {
      if (this.state.value.length < 1) return this.setState(initialState);
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.name)
      this.setState({
        isLoading: false,
        results: _.filter(location.cities, isMatch),
      });
    }, 300);
  };

  resultRenderer = ({ name }) => (
    <Message
    info
    header={name}
  />
  );

  render() {
    const { hint } = this.props;
    const { isLoading, value, results } = this.state;
    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={results}
        value={value}
        {...this.props}
        placeholder={hint}
        resultRenderer={this.resultRenderer}
      />
    );
  }
}

export default SearchPartnerFinder;
