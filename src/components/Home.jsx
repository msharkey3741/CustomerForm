import React from "react";
import Customer from "./Customer";
import CustomerForm from "./CustomerForm";
import Button from "react-bootstrap/Button";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import * as customerService from "../services/customerServices";
import * as uvService from "../services/uvService";
import SolarInfo from "./SolarInfo";

class Home extends React.Component {
  state = {
    uvData: {},
    mapCustomers: [],
    customers: [],
    customer: {},
    modal: false,
    isEditing: false,
    formData: {
      email: "",
      firstName: "",
      lastName: ""
    }
  };
  componentDidMount() {
    this.getAllCustomers();
    this.getUvData();
  }
  getUvData = () => {
    uvService
      .getUvData()
      .then(this.uvSuccess)
      .catch(this.err);
  };
  uvSuccess = data => {
    this.setState(prevState => ({
      ...prevState,
      uvData: data.body.result
    }));
  };
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  deleteCust = id => {
    customerService
      .deleteCustomer(id)
      .then(this.getAllCustomers)
      .catch(this.err);
    console.log(id);
  };
  update = customer => {
    this.setState(prevState => ({
      ...prevState,
      isEditing: true,
      customer: customer
    }));
    this.toggle();
  };

  err = err => {
    console.log(err);
  };
  getAllCustomers = () => {
    customerService
      .getAllCustomers()
      .then(this.customerSucc)
      .catch();
  };
  customerSucc = data => {
    this.setState(() => ({
      customers: data.customers
    }));
  };
  mapCustomers = customers => (
    <Customer
      key={customers.id}
      deleteCust={this.deleteCust}
      update={this.update}
      customers={customers}
    />
  );
  addCustomer = values => {
    if (this.state.isEditing === false) {
      customerService
        .addCustomer(values)
        .then(this.getAllCustomers)
        .then(this.toggle)
        .catch(this.err);
    }
    // else {
    //   customerService
    //     .update(values)
    //     .then(this.getAllCustomers)
    //     .then(this.toggle)
    //     .catch(this.err);
    // }
    console.log(values);
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ paddingLeft: 100 }}>
          <Button variant="primary" onClick={this.toggle}>
            Add Customer
          </Button>
          <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody>
              {/* Customer Form for updating and adding */}
              <CustomerForm
                addCustomer={this.addCustomer}
                formData={this.state.customer}
              />
            </ModalBody>
            <ModalFooter>
              {/* Close Modal */}
              <Button onClick={this.toggle}>Close Form</Button>
            </ModalFooter>
          </Modal>
          <div className="row">
            <div className="col">
              <h1>Customer's Information</h1>
              {/* Customer Information */}
              {this.state.customers.map(this.mapCustomers)}
            </div>
            <div className="col" style={{ paddingRight: 100 }}>
              <SolarInfo solar={this.state.uvData} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
