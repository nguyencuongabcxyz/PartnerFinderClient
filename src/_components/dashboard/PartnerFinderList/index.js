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
    filterMode: false,
    defaultLocation: "",
    defaultLevel: 3,
    location: "",
    level: 3,
    currentPage: 0
  };

  componentDidMount() {
    const { defaultLocation, defaultLevel } = this.state;
    this.props.fetchManyFinders(
      0,
      this.sizePage,
      defaultLocation,
      defaultLevel
    );
  }

  fetchFindersPagination = index => {
    this.setState({
      currentPage: index
    });
    const {
      location,
      level,
      filterMode,
      defaultLocation,
      defaultLevel
    } = this.state;
    if (filterMode) {
      this.props.fetchManyFinders(index, this.sizePage, location, level);
    } else {
      this.props.fetchManyFinders(
        index,
        this.sizePage,
        defaultLocation,
        defaultLevel
      );
    }
  };

  renderPartnerFinderList = () => {
    const {
      currentPage,
      filterMode,
      defaultLevel,
      defaultLocation,
      level,
      location
    } = this.state;
    const passedLevel = filterMode ? level : defaultLevel;
    const passedLocation = filterMode ? location : defaultLocation; 
    return this.props.partnerFinders.map(item => {
      return (
        <PartnerFinderItem
          currentPage={currentPage}
          passedLevel={passedLevel}
          passedLocation={passedLocation}
          key={item.userId}
          partnerFinder={item}
        />
      );
    });
  };

  setLevel = (event, { value }) => {
    this.setState({
      level: value
    });
  };

  setLocation = value => {
    this.setState({
      location: value
    });
  };

  filter = () => {
    this.setState({
      filterMode: true
    });
    const { location, level } = this.state;
    this.props.fetchManyFinders(0, this.sizePage, location, level);
  };

  showAll = () => {
    this.setState({
      filterMode: false
    });
    const { defaultLocation, defaultLevel } = this.state;
    this.props.fetchManyFinders(
      0,
      this.sizePage,
      defaultLocation,
      defaultLevel
    );
  };

  levelOptions = [
    { key: "0", text: "All", value: "3" },
    { key: "1", text: "Beginner", value: "0" },
    { key: "2", text: "Intermediate", value: "1" },
    { key: "3", text: "Advanced", value: "2" },
  ];

  render() {
    let resultDisplay = this.state.filterMode ? "block" : "none";
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
              onChange={this.setLevel}
            />
          </div>
          <LocationInput
            setValue={this.setLocation}
            placeholder="Filter by location"
          />
        </div>
        <div className="fd-filter-wrapper">
          <div className="ui buttons">
            <button className="ui button" onClick={this.filter}>
              Filter
            </button>
            <div className="or"></div>
            <button className="ui positive button" onClick={this.showAll}>
              Show all
            </button>
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
            this.props.partnerFinders.length === 0 && !this.state.filterMode
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
