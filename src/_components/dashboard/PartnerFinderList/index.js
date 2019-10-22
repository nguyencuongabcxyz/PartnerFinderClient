import React from 'react'
import PartnerFinderItem from '../PartnerFinderItem';
import FilterForm from '../FilterForm';
import { connect } from 'react-redux';
import { fetchManyFinders, fetchManyWithFilter } from '../../../_actions/partner-finder';
import './style.css'
import Spinner from '../../Spinner';
import Pagination from '../../shared/pagination';

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

    onSubmit = (formValues) => {
        this.props.fetchManyWithFilter(formValues, 0, 6);
        this.setState({
            filter : true
        });
    }

    render() {
        let resultDisplay = this.state.filter ? 'block' : 'none';
        return (
            <div id="finder-list">
                <div id="filter">
                    <FilterForm onSubmit={this.onSubmit}/>
                </div>
                <h5 style={{display: resultDisplay, fontWeight: 'bold', color: '#4f4f4f'}}>{this.props.count} results were found</h5>
                <Spinner condition={this.props.partnerFinders.length === 0 && !this.state.filter}/>
                <div id="partner-finder-list">
                    {this.renderPartnerFinderList()}
                </div>
                <Pagination callBack={this.fetchFindersPagination}  itemCount={this.props.count} sizePage={this.sizePage}/>
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

export default connect(mapStateToProps, {fetchManyFinders, fetchManyWithFilter})(PartnerFinderList);

