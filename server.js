// Setup empty JS object to act as endpoint for all routes
projectData = {};

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

app.get("/messages", (req, res) => {
  res.send("Hello");
});

// GET route
app.get("/all", sendData);

function sendData(request, response) {
  response.send(data);
}

// POST route
data = [];
app.post("/add", addData);

function addData(req) {
  let newData = req.body;

  let newEntry = {
    temp: newData.temp,
    date: newData.date,
    content: newData.content,
  };
  projectData = data.push(newEntry);

  console.log("projectData:", projectData);
  console.log("data:", data);
}

addData({
  body: {
    temp: 13,
    date: "06.06.2023",
    content: "amazing!",
  },
});

addData({
  body: {
    temp: 14,
    date: "01.06.2023",
    content: "www!",
  },
});

console.log("projectData:", projectData);
