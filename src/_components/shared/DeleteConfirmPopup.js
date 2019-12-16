import React from "react";
import { Modal, Header, Icon, Button } from "semantic-ui-react";
import './css/delete-confirm-popup.css';

class DeleteConfirmPopup extends React.Component {

  state = {
    open : false, 
  }

  open = () => {
    this.setState({
      open: true,
    });
  }
  
  close = () => {
    this.setState({
      open: false,
    });
  }

  executeAction = () => {
    const { action, id } = this.props;
    console.log(id);
    action(id);
    this.setState({
      open: false,
    })
  }

  render() {
    const {open} = this.state;
    return (
      <Modal
      className="c-semantic-delete-modal"
      open={open}
    >
      <Header className="c-semantic-modal-header" icon="question circle outline" content="Confirm delete action." />
      <Modal.Content>
        <p className="c-semantic-modal-content">
          Are you sure you want to delete this item?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="orange" onClick={this.close}>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="grey" onClick={this.executeAction}>
          <Icon name="checkmark" /> Confirm
        </Button>
      </Modal.Actions>
    </Modal>
    );
  }
}

export default DeleteConfirmPopup;
