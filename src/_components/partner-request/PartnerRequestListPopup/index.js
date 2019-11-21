import React from 'react';
import { connect } from 'react-redux';
import { fetchManyPartnerRequests } from '../../../_actions/partner-request';
import './style.css';
import PartnerRequestItemPopup from '../PartnerRequestItemPopup';

class PartnerRequestListPopup extends React.Component {

  sizePage = 8;

  componentDidMount() {
    const { fetchManyPartnerRequests } = this.props;
    fetchManyPartnerRequests(0, this.sizePage);
  }

    renderPartnerRequests = () => {
      const { partnerRequests } = this.props;
      return partnerRequests.map(item => {
        return <PartnerRequestItemPopup item={item} />
      });
    }

    render(){
        return (
            <div className="pr-popup-container">
                <div className="pr-popup-header">
                    <h3>Partner requests</h3>
                </div>
                <div className="pr-popup-body">
                <p className="pr-popup-new">New</p>
                   {this.renderPartnerRequests()}
                </div>
                <div className="pr-popup-footer">
                    <a href="#"><span>See all</span></a>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
  return {
    partnerRequests: state.partnerRequest.partnerRequests,
    count: state.partnerRequest.count
  };
};


export default connect(mapStateToProps, { fetchManyPartnerRequests })(PartnerRequestListPopup);