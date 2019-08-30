import React from 'react'
import PartnerFinderItem from '../PartnerFinderItem';
import FilterForm from '../FilterForm';
import { connect } from 'react-redux';
import { fetchManyFinders } from '../../../_actions/partnerFinderActions';
import './style.css'

class PartnerFinderList extends React.Component {

    componentDidMount() {
        this.props.fetchManyFinders(0, 6);
    }

    renderPartnerFinderList = () => {
        return this.props.partnerFinders.map(item => {
            return (
                <PartnerFinderItem partnerFinder={item}/>
            );
        })
    }

    render() {
        return (
            <div id="finder-list">
                <h1 className="dashboard-title">
                    People looking for partner
                </h1>
                <div id="filter">
                    <FilterForm />
                </div>
                <div id="partner-finder-list">
                    {this.renderPartnerFinderList()}
                </div>
                <div className="paging">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
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

