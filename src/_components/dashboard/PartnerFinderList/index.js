import React from 'react'
import PageLayout from '../../PageLayout';

class PartnerFinderList extends React.Component {



    render(){
        return (
            <div id="finder-list">
                <h1>
                    People looking for partner
                </h1>
                <div id="filter">
                <input id="ex1" data-slider-id='ex1Slider' type="range" min="0" max = "10" />
                </div>
            </div>
        );
    }
}

export default PartnerFinderList;

