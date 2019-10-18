/* SQL Connection and Query Attempt */

// // const connection = require("../../sqlConnection");

// // var request = require("tedious").Request;
// // // var TYPES = require("tedious").TYPES;
// // connection.on("connect", function(err) {
// //   if (err) console.log(err);
// //   executeStatement();
// // });
// // const express = require("express");
// // const service = express.Router();

// // var Connection = require("tedious").Connection;
// // var config = {
// //   database: "ATHack1",
// //   authentication: {
// //     type: "default",
// //     options: {
// //       userName: "ATHack1_User01", //update me
// //       encrypt: true
// //     }
// //   }
// //   //"Server=(localdb)\\MSSQLLocalDB;Database=Sharkey;Trusted_Connection=True;" //update me
// //   // authentication: {
// //   //   type: "default",
// //   //   options: {
// //   //     userName: "your_username", //update me
// //   //     password: "your_password" //update me
// //   //   }
// // };
// // // options: {
// // //   // If you are on Microsoft Azure, you need encryption:
// // //   encrypt: false
// // //   // database: "Sharkey" //update me
// // // }
// // // };
// // var connection = new Connection(config);
// // connection.on("connect", function(err) {
// //   if (err) {
// //     console.log("error", err);
// //   } else {
// //     selectAll();
// //     console.log("Connected");
// //   }

// //   // If no error, then good to proceed.
// // });

// let Request = require("tedious").Request;
// let TYPES = require("tedious").TYPES;

// const selectAll = () => {
//   Request = new Request("Users_SelectAll", function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       let result = "";
//       Request.on("row", function(columns) {
//         columns.forEach(function(column) {
//           if (column.value === null) {
//             console.log("NULL");
//           } else {
//             console.log("else");
//           }
//         });
//         console.log(result);
//         result = "";
//       });

//       Request.on("done", function(rowCount, more) {
//         debugger;
//         console.log(rowCount + " rows returned", more);
//       });
//       connection.execSql(Request);
//     }
//   });
// };
