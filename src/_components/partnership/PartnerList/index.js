import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPartners } from '../../../_actions/partnership';
import './style.css';

class PartnerList extends React.Component {

    componentDidMount() {
        const {fetchAllPartners} = this.props;
        fetchAllPartners();
    }

    renderPartnerList = () => {
        const {partners} = this.props;
        return partners.map(item => {
            const {avatar, name, partnerId} = item;
            return (
                <div className="item pl-c-user-sidebar">
                <div className="pl-c-user-sidebar-header">
                <img className="ui avatar image" src={avatar} />
                <div className="content">
                  <div className="header pl-c-user-name"><a href="/user-info">{name}</a></div>
                </div>
                </div>
                <div className="pl-user-sidebar-action">
                    <i className="ui icon talk"></i>
                    <i className="ui icon remove user"></i>
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

export default connect(mapStateToProps, {fetchAllPartners})(PartnerList);