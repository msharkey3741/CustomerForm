import React from "react";
import { Formik, FastField } from "formik";
import customerSchema from "./validation";

class CustomerForm extends React.Component {
  state = {
    formData: { email: "", firstName: "", lastName: "" }
  };
  submit = values => {
    console.log(values);
  };
  render() {
    return (
      /* Form for adding and updating customer information */
      <div>
        <h1>Add Customers Info Here</h1>
        <Formik
          initialValues={this.state.formData}
          enableReinitialize={true}
          validationScheme={customerSchema}
          onSubmit={this.submit}
          render={formikProps => (
            <form onSubmit={formikProps.handleSubmit}>
              <div className="row">
                <div className="form-group col-md-4">
                  <label className="col-form-label">Email:</label>
                  <FastField
                    type="text"
                    name="email"
                    placeholder="Email"
                    component="input"
                    className="form-control"
                  />
                  {formikProps.touched.email && formikProps.errors.email && (
                    <div className="text-danger">
                      {formikProps.errors.email}
                    </div>
                  )}
                </div>
                <div className="form-group col-md-3">
                  <label className="col-form-label">First Name:</label>
                  <FastField
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label className="col-form-label">Last Name:</label>
                  <FastField
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        />
      </div>
    );
  }
}
export default CustomerForm;
