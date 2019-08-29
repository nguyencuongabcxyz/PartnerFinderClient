import React from 'react'
import PartnerFinderItem from '../PartnerFinderItem';
import FilterForm from '../FilterForm';
import './style.css'

class PartnerFinderList extends React.Component {

    render() {
        return (
            <div id="finder-list">
                <h1 className="dashboard-title">
                    People looking for partner
                </h1>
                <div id="filter">
                    <FilterForm />
                </div>
                <div>
                    <PartnerFinderItem />
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

export default PartnerFinderList;

