import axios from "axios";
import * as helper from "./serviceHelper";

const getUvData = () => {
  const config = {
    method: "GET",
    url: "http://localhost:5000/uv/",
    crossdomain: true,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(helper.onGlobalSuccess)
    .catch(helper.onGlobalError);
};
export { getUvData };
// function getUVIndex() {
//   var lat = $("#lat").val();
//   var lng = $("#lng").val();
//   var alt = $("#alt").val();
//   var ozone = $("#ozone").val();
//   var dt = $("#dt").val();

//   $.ajax({
//     type: "GET",
//     dataType: "json",
//     beforeSend: function(request) {
//       request.setRequestHeader(
//         "x-access-token",
//         "63cc45ccb2be1463776c8d8330b14f65"
//       );
//     },
//     url:
//       "https://api.openuv.io/api/v1/uv?lat=" +
//       lat +
//       "&lng=" +
//       lng +
//       "&alt=" +
//       alt +
//       "&ozone=" +
//       ozone +
//       "&dt=" +
//       dt,
//     success: function(response) {
//       //handle successful response
//     },
//     error: function(response) {
//       // handle error response
//     }
//   });
// }
