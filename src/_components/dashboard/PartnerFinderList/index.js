import React from 'react'
import PartnerFinderItem from '../PartnerFinderItem';
import { connect } from 'react-redux';
import { fetchManyFinders} from '../../../_actions/partner-finder';
import './style.css'
import Spinner from '../../Spinner';
import Pagination from '../../shared/pagination';
import SearchDropdown from '../../shared/SearchDropdown';

class PartnerFinderList extends React.Component {

    sizePage = 6;
    state = {
        filter : false
    }

    componentDidMount() {
        this.props.fetchManyFinders(0, this.sizePage);
    }

    fetchFindersPagination = (index) => {
        this.props.fetchManyFinders(index, this.sizePage);
    }

    renderPartnerFinderList = () => {
        return this.props.partnerFinders.map(item => {
            return (
                <PartnerFinderItem key={item.userId} partnerFinder={item}/>
            );
        })
    }

    render() {
        let resultDisplay = this.state.filter ? 'block' : 'none';
        return (
          <div id="finder-list">
            <div className="dashboard-header-section">
            <h1 className="dashboard-title">People looking for partners</h1>
            <div className="post-search-wrapper">
              <SearchDropdown
                // searchFunction={PostService.searchForFeedbackPost}
                // routeType={POST_TYPE_DETAIL_ROUTE.FEEDBACK}
                hint="Search by location"
              />
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

const mapStateToProps = (state) => {
    return {
        partnerFinders : state.partnerFinder.partnerFinders,
        count : state.partnerFinder.count
    }
}

export default connect(mapStateToProps, {fetchManyFinders})(PartnerFinderList);

