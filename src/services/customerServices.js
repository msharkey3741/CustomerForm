import axios from "axios";
import * as helper from "./serviceHelper";

const getAllCustomers = () => {
  const config = {
    method: "GET",
    url: "http://localhost:5000/customers/",
    crossdomain: true,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
  return axios(config)
    .then(helper.onGlobalSuccess)
    .catch(helper.onGlobalError);
};
const getCustomerById = id => {
  const config = {
    method: "GET",
    url: `http://localhost:3000/customers/${id}`,
    crossdomain: true,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
  return axios(config)
    .then(helper.onGlobalSuccess)
    .catch(helper.onGlobalError);
};
const deleteCustomer = id => {
  const config = {
    method: "DELETE",
    url: `http://localhost:3000/customers/${id}`,
    crossdomain: true,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
  return axios(config)
    .then(helper.onGlobalSuccess)
    .catch(helper.onGlobalError);
};
const addCustomer = payload => {
  const config = {
    method: "POST",
    data: payload,
    url: `http://localhost:3000/customers/`,
    crossdomain: true,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
  return axios(config)
    .then(helper.onGlobalSuccess)
    .catch(helper.onGlobalError);
};

export { getAllCustomers, addCustomer, deleteCustomer, getCustomerById };
