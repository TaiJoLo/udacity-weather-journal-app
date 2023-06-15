/* Global Variables */
let zipCode = "";
let apiKey = "";
let temp = "";
apiKey = "85809549041cdefbef629f3153fa24b7";
zipCode = document.getElementById("zip").value;
feelings = document.getElementById("feelings").value;

// ISO 3166-1 alpha-2 country codes
let country_code = "US";

// Create a new date instance dynamically with JS
let d = new Date();
let monthNames = "";
monthNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
let monthDigit = d.getMonth();
let month = monthNames[monthDigit];
let newDate = month + "." + d.getDate() + "." + d.getFullYear();

// API of coordinates by zip/post code

let API_weather = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

document.getElementById("generate").addEventListener("click", performAction);

// async function performAction(e) {
//   console.log("calling getCoordinates");
//   const result = await getWeather(zipCode, apiKey);
// }

const getWeather = async (zipCode, apiKey) => {
  // API of getting weather

  const res = await fetch(`${API_weather}`);
  try {
    const data = await res.json();

    let temp = data.main.temp;
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// Async POST
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// Async GET
const retrieveData = async (url = "") => {
  const request = await fetch(url);
  try {
    console.log(allData);
    // Transform into JSON
    const allData = await request.json();
    // Write updated data to DOM elements
    document.getElementById("temp").innerHTML =
      Math.round(allData.temp) + "degrees";
    document.getElementById("content").innerHTML = allData.feel;
    document.getElementById("date").innerHTML = allData.date;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

async function performAction(e) {
  console.log("calling");
  getWeather(zipCode, apiKey)
    .then(function (data) {
      postData("/add", {
        temp: data.main.temp,
        date: newDate,
        content: feelings,
      });
    })
    .then(function (data) {
      retrieveData("/all");
    });
}
