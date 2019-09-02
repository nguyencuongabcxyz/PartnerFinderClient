import React from 'react'
import PartnerFinderItem from '../PartnerFinderItem';
import FilterForm from '../FilterForm';
import { connect } from 'react-redux';
import { fetchManyFinders } from '../../../_actions/partnerFinderActions';
import './style.css'
import Spinner from '../../Spinner';
import Pagination from '../../shared/pagination';

class PartnerFinderList extends React.Component {

    componentDidMount() {
        this.props.fetchManyFinders(0, 6);
    }

    fetchFindersPagination = (index) => {
        this.props.fetchManyFinders(index, 6);
    }

    renderPartnerFinderList = () => {
        return this.props.partnerFinders.map(item => {
            return (
                <PartnerFinderItem key={item.userId} partnerFinder={item}/>
            );
        })
    }

    render() {
        let display = 'flex';
        if(this.props.partnerFinders.length !== 0){
            display = 'none';
        }
        return (
            <div id="finder-list">
                <h1 className="dashboard-title">
                    People looking for partner
                </h1>
                <div id="filter">
                    <FilterForm />
                </div>
                <Spinner display={display} />
                <div id="partner-finder-list">
                    {this.renderPartnerFinderList()}
                </div>
                <Pagination callBack={this.fetchFindersPagination}  itemCount={this.props.count} sizePage={6}/>
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

