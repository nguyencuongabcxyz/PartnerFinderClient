import React from 'react'
import PageLayout from '../../PageLayout';
import PartnerFinderItem from '../PartnerFinderItem';
import FilterForm from '../FilterForm';

class PartnerFinderList extends React.Component {

    render(){
        return (
            <div id="finder-list">
                <h1>
                    People looking for partner
                </h1>
                <div id="filter">
                  <FilterForm />
                </div>
                <div>
                    <PartnerFinderItem />
                </div>
            </div>
        );
    }
}

export default PartnerFinderList;

