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
  deleteCust = () => {
    console.log("delete");
  };
  update = () => {
    console.log("update");
  };
  deactivate = () => {
    console.log("deactivate");
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <Button variant="primary" onClick={this.toggle}>
            Add Customer
          </Button>
          <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody>
              {/* Customer Form for updating and adding */}
              <CustomerForm />
            </ModalBody>
            <ModalFooter>
              {/* Close Modal */}
              <Button onClick={this.toggle}>Close Form</Button>
            </ModalFooter>
          </Modal>
          <h1>Customer's Information</h1>
          {/* Customer Information */}
          <Customer
            deleteCust={this.deleteCust}
            update={this.update}
            deactivate={this.deactivate}
          />
          {/* Open Modal for customer form */}
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
