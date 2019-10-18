var Connection = require("tedious").Connection;
var config = {
  server:
    "Server=(localdb)\\MSSQLLocalDB;Database=Sharkey;Trusted_Connection=True;", //update me
  authentication: {
    type: "default",
    options: {
      userName: "your_username", //update me
      password: "your_password" //update me
    }
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: true,
    database: "your_database" //update me
  }
};
var connection = new Connection(config);
connection.on("connect", function(err) {
  // If no error, then good to proceed.
  console.log("Connected");
});
