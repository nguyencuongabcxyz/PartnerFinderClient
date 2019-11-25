import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPartners } from '../../../_actions/partnership';
import './style.css';

class PartnerList extends React.Component {

    componentDidMount() {
        const {fetchAllPartners} = this.props;
        fetchAllPartners();
    }

    // renderPartnerList = () => {
    //     const {partners} = this.props;
    //     return partners.map(item => {
    //         return (

    //         );
    //     })
    // }

    render() {
        return (
            <div>
                PartnerList
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const partners = state.partnerships;
    return {
        partners: Object.values(partners),
    }
}

export default connect(mapStateToProps, {fetchAllPartners})(PartnerList);