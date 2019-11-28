import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPartners, deleteOnePartner } from '../../../_actions/partnership';
import { Link } from 'react-router-dom';
import './style.css';
import DeleteConfirmPopup from '../../shared/DeleteConfirmPopup';

class PartnerList extends React.Component {

    componentDidMount() {
        const {fetchAllPartners} = this.props;
        fetchAllPartners();
    }

    removeOnePartnership = (partnerId) => {
        const {deleteOnePartner} = this.props;
        deleteOnePartner(partnerId);
    }

    openPopup = () => {
        this.deletePopup.open();
    }

    renderPartnerList = () => {
        const {partners} = this.props;
        return partners.map(item => {
            const {avatar, name, partnerId} = item;
            return (
                <div className="item pl-c-user-sidebar">
                <div className="pl-c-user-sidebar-header">
                <img className="ui avatar image" src={avatar} alt="avatar" />
                <div className="content">
                  <div className="header pl-c-user-name"><Link to={`/user-info/${partnerId}`}>{name}</Link></div>
                </div>
                </div>
                <div className="pl-user-sidebar-action">
                    <i className="ui icon talk"></i>
                    <i className="ui icon remove user" onClick={this.openPopup}></i>
                    <DeleteConfirmPopup ref={el => this.deletePopup = el} id={partnerId} action={this.removeOnePartnership} />
              </div>
              </div>
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