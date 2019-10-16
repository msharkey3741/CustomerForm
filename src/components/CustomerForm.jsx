import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
const customerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});
class CustomerForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Customers Info Here</h1>
        <Formik
          initialValues={{ email: "", firstName: "", lastName: "" }}
          validationScheme={customerSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
          render={(props, errors, touched) => (
            <form onSubmit={props.handleSubmit}>
              <div className="row">
                <div className="form-group col-md-3">
                  <Field type="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group col-md-3">
                  <Field name="firstName" placeholder="First Name" />
                </div>
                <div className="form-group col-md-3">
                  <Field name="lastName" placeholder="Last Name" />
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
