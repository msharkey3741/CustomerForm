import React from "react";
import Customer from "./Customer";
import CustomerForm from "./CustomerForm";
import Button from "react-bootstrap/Button";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

class Home extends React.Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody>
              <CustomerForm />
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.toggle}>Close Form</Button>
            </ModalFooter>
          </Modal>
          <h1>Customer's Information</h1>
          <Customer />
          <Button variant="primary" onClick={this.toggle}>
            Add Customer
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
