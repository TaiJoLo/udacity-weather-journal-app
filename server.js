// Setup empty JS object to act as endpoint for all routes
projectData = {
  temperature: "21",
  date: "04.06.2023",
  user_response: "great!",
};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

const port = 5500;
app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send(projectData);
});

req = {
  temperature: "12",
  date: "05.06.2023",
  user_response: "freezing!",
};
app.post("/", (req, res) => {
  res.send("Got a POST request");
});

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
// app.use(express.static("website"));

// Setup Server
