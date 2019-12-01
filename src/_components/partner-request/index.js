import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import PageLayout from '../layout/PageLayout';
import { fetchManyPartnerRequests } from '../../_actions/partner-request';
import PartnerRequestItem from './PartnerRequestItem';

class PartnerRequest extends React.Component {

    sizePage = 8;

    componentDidMount() {
        const { fetchManyPartnerRequests } = this.props;
        fetchManyPartnerRequests(0, this.sizePage);
    }

    renderPartnerRequestList = () => {
        const { partnerRequests } = this.props;
        return partnerRequests.map(item => {
          return (
              <PartnerRequestItem key={item.id} request={item} />
          );
        });
    }

    render() {
        return (
            <PageLayout>
                <div className="pr-main-container">
                    <h1>Your partner requests</h1>
                    <div className="ui middle aligned divided list">
                        {this.renderPartnerRequestList()}
                    </div>
                </div>
            </PageLayout>
        );
    }
}

const mapStateToProps = state => {
    return {
      partnerRequests: state.partnerRequest.partnerRequests,
      count: state.partnerRequest.count
    };
  };
  
  export default connect(mapStateToProps, { fetchManyPartnerRequests })(PartnerRequest);