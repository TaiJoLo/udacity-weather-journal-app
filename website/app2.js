/* Global Variables */
let zipCode = "";
let apiKey = "";

apiKey = "85809549041cdefbef629f3153fa24b7";
zipCode = document.getElementById("zip").value;

// ISO 3166-1 alpha-2 country codes
let country_code = "US";
let lat = 10;
let lon = 20;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Return Endpoint Data . GET Route II: Client Side
const retrieveData = async (url = "") => {
  const request = await fetch("/all");
  try {
    // Transform into JSON
    const allData = await request.json();
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// API of coordinates by zip/post code

let API_weather = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

document.getElementById("generate").addEventListener("click", performAction);

async function performAction(e) {
  console.log("calling getCoordinates");
  const result = await getWeather(zipCode, apiKey);
}

const getWeather = async (zipCode, apiKey) => {
  console.log("zipCode:", zipCode);
  console.log("apiKey:", apiKey);

  // API of getting weather
  console.log("API_weather:", API_weather);
  const res = await fetch(`${API_weather}`);
  try {
    const data = await res.json();
    console.log(data);
    let temp = data.main.temp;
    console.log("temp:", temp);

    return temp;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
