import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPartners, deleteOnePartner } from '../../../_actions/partnership';
import { Link } from 'react-router-dom';
import './style.css';
import DeleteConfirmPopup from '../../shared/DeleteConfirmPopup';
import PartnerItem from '../PartnerItem';

class PartnerList extends React.Component {

    componentDidMount() {
        const {fetchAllPartners} = this.props;
        fetchAllPartners();
    }

    renderPartnerList = () => {
        const {partners} = this.props;
        return partners.map(item => {
            const {avatar, name, partnerId, conversationId} = item;
            return (
                <PartnerItem key={item.partnerId} item={item} />
            );
        });
    }

    render() {
        return (
            <div className="ui middle aligned animated list">
                {this.renderPartnerList()}
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

export default connect(mapStateToProps, {fetchAllPartners, deleteOnePartner})(PartnerList);