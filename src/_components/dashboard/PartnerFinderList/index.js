import React from "react";
import PartnerFinderItem from "../PartnerFinderItem";
import { connect } from "react-redux";
import { fetchManyFinders } from "../../../_actions/partner-finder";
import { Dropdown } from "semantic-ui-react";
import "./style.css";
import Spinner from "../../Spinner";
import Pagination from "../../shared/pagination";
import LocationInput from "../../shared/LocationInput";

class PartnerFinderList extends React.Component {
  sizePage = 6;
  state = {
    filter: false
  };

  componentDidMount() {
    this.props.fetchManyFinders(0, this.sizePage, "", 3);
  }

  fetchFindersPagination = index => {
    this.props.fetchManyFinders(index, this.sizePage);
  };

  renderPartnerFinderList = () => {
    return this.props.partnerFinders.map(item => {
      return <PartnerFinderItem key={item.userId} partnerFinder={item} />;
    });
  };

  filterByLocation = value => {};

  levelOptions = [
    { key: "0", text: "Beginner", value: 0 },
    { key: "1", text: "Intermediate", value: 1 },
    { key: "2", text: "Advanced", value: 2 }
  ];

  render() {
    let resultDisplay = this.state.filter ? "block" : "none";
    return (
      <div id="finder-list">
        <div className="dashboard-header-section">
          <h1 className="dashboard-title">People looking for partners</h1>
          <div className="form-group">
            <label>Level</label>
            <Dropdown
              placeholder="Level"
              fluid
              selection
              options={this.levelOptions}
            />
          </div>
          <LocationInput
            setValue={this.filterByLocation}
            placeholder="Filter by location"
          />
        </div>
        <div>
        <div className="ui buttons">
          <button className="ui button">Filter</button>
          <div className="or"></div>
          <button className="ui positive button">Show all</button>
        </div>
        </div>
        <h5
          style={{
            display: resultDisplay,
            fontWeight: "bold",
            color: "#4f4f4f"
          }}
        >
          {this.props.count} results were found
        </h5>
        <Spinner
          condition={
            this.props.partnerFinders.length === 0 && !this.state.filter
          }
        />
        <div id="partner-finder-list">{this.renderPartnerFinderList()}</div>
        <Pagination
          callBack={this.fetchFindersPagination}
          itemCount={this.props.count}
          sizePage={this.sizePage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    partnerFinders: state.partnerFinder.partnerFinders,
    count: state.partnerFinder.count
  };
};

export default connect(mapStateToProps, { fetchManyFinders })(
  PartnerFinderList
);
