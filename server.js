// Setup empty JS object to act as endpoint for all routes
projectData = {
  temperature: "",
  date: "",
  user_response: "",
};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));
const port = 3000;

// Setup Server

const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);
}

// GET route
app.get("/all", sendData);

function sendData(request, response) {
  response.send(projectData);
}

// POST route
app.post("/add", callBack);

function callBack(req, res) {
  res.send("POST received");
}

// POST an animal
// const data = [];
const data = [
  {
    temperature: "15",
    date: "10.05.2023",
    user_response: "wow",
  },
  {
    temperature: "25",
    date: "01.06.2023",
    user_response: "yeah",
  },
];
app.post("/add", addData);

function addData(request) {
  let newData = request.body;
  let newEntry = {
    temperature: newData.temperature,
    date: newData.date,
    user_response: newData.user_response,
  };
  data.push(newEntry);
  console.log(data);
}

addData({
  body: {
    temperature: "13",
    date: "06.06.2023",
    user_response: "amazing!",
  },
});

// POST
// const data = [];

// app.post("/projectData", addData);

// function addData(req, res) {
//   // res.send("Got a POST request");
//   data.push(req.body);
// }

// addData({
//   body: { temperature: "35", date: "12/06/2023", user_response: "wow!" },
// });
//----//
// express.request = {
//   temperature: "12",
//   date: "05.06.2023",
//   user_response: "freezing!",
// };

// const data = [];
// app.post("/", addData);

// function addData(request) {
//   res.send("Got a POST request");

//   data.push(req.body);
// }
// addData({
//   body: { temperature: "35", date: "12/06/2023", user_response: "wow!" },
// });
// console.log(data);
