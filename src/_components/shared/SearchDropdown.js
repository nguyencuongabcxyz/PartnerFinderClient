import _ from "lodash";
import React, { Component } from "react";
import { Search } from "semantic-ui-react";


const initialState = { 
    isLoading: false, 
    results: [], 
    value: "" 
};

class SearchDropdown extends Component {
  state = initialState;

  mapResultsToSearchResults = results => {
    if (!results) return;
    const searchResults = [];
    results.forEach(element => {
      let searchModel = _.pick(element, [
        "id",
        "title",
        "type",
        "avatar",
        "name"
      ]);
      searchModel.answer = element.answerNumber;
      searchModel.uid = element.userId;
      searchResults.push(searchModel);
    });
    return searchResults;
  };

  handleResultSelect = (e, { result }) => {
    if (!result) return;
    const { id } = result;
    const { routeType } = this.props;
    window.location.href = `/${routeType}/${id}`;
  }

  handleSearchChange = (e, { value }) => {
    const { searchFunction } = this.props;
    this.setState({ isLoading: true, value });
    setTimeout(async () => {
      if (this.state.value.length < 1) return this.setState(initialState);
      const results = await searchFunction(value);
      this.setState({
        isLoading: false,
        results: this.mapResultsToSearchResults(results)
      });
    }, 300);
  };

  renderType = type => {
    if (type === 1) {
      return <div className="ui orange label">Written</div>;
    } else if (type === 2) {
      return <div className="ui green label">Spoken</div>;
    } else {
      return null;
    }
  };

  resultRenderer = ({ title, type, answer }) => (
    <div className="ui positive message">
      <p>{title}</p>
      <div>
        {this.renderType(type)}
        <div className="ui brown label">{answer} answers</div>
      </div>
    </div>
  );

  render() {
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
        resultRenderer={this.resultRenderer}
      />
    );
  }
}

export default SearchDropdown;
