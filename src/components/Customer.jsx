import React from "react";
import { Button } from "react-bootstrap";

const Customer = props => {
  console.log(props);
  const deleteCust = () => {
    props.deleteCust(props.customers.id);
  };
  // const update = () => {
  //   props.update(props.customers);
  // };
  return (
    /* Card for mapping through customer information */
    <div>
      <div className="card" style={{ paddingBottom: 20 }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            {props.customers.firstName} {props.customers.lastName}
          </h6>

          <h6 className="card-subtitle mb-2 text-muted">
            {props.customers.email}
          </h6>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <Button variant="danger" onClick={deleteCust}>
              Delete Customer
            </Button>
          </div>
          {/* <div className="col-md-4">
            <Button variant="info" onClick={update}>
              Update Customer
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Customer;
