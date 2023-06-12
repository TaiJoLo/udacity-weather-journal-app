/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

let baseURL = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${apiKey}`;
let apiKey = "85809549041cdefbef629f3153fa24b7";

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
  const newZip = document.getElementById("zip").value;
  getWeather(baseURL, newZip, apiKey);
}
const getWeather = async (baseURL, user_zipcode, key) => {
  const res = await fetch(baseURL + user_zipcode + key);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

/* Function to POST data */
const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    // console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// Call Function
postData("/addAnimal", {
  temperature: "35",
  date: "12/06/2023",
  user_response: "wow!",
});
