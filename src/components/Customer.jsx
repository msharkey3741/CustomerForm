import React from "react";
import { Button } from "react-bootstrap";

const Customer = props => {
  const deleteCust = () => {
    props.deleteCust();
  };
  const update = () => {
    props.update();
  };
  const deactivate = () => {
    props.deactivate();
  };
  return (
    /* Card for mapping through customer information */
    <div>
      <div className="card col-lg-6">
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Name</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h6 className="card-subtitle mb-2 text-muted">Email</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Button variant="danger" onClick={deleteCust}>
              Delete Customer
            </Button>
          </div>
          <div className="col-md-4">
            <Button variant="info" onClick={update}>
              Update Customer
            </Button>
          </div>
          <div className="col-md-4">
            <Button variant="secondary" onClick={deactivate}>
              Deactivate Customer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Customer;
