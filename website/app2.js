/* Global Variables */

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
const apiKey = "85809549041cdefbef629f3153fa24b7";

const zipCode = document.getElementById("zip").value;
// ISO 3166-1 alpha-2 country codes
let country_code = "US";
let lat = 10;
let lon = 20;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// API of coordinates by zip/post code

let API_weather = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${country_code}&appid=${apiKey}&units=metric`;

document.getElementById("generate").addEventListener("click", performAction);

async function performAction(e) {
  console.log("calling getCoordinates");
  const result = await getWeather(zipCode, apiKey);
}

const getWeather = async (lat, lon, apiKey) => {
  console.log("Lat:", lat);
  console.log("Lon:", lon);
  // API of getting weather
  let API_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  console.log("API_weather:", API_weather);
  const res = await fetch(`${API_weather}`);
  try {
    const data = await res.json();

    let temp = data.main.temp;
    console.log("temp:", temp);
    console.log(data);
    return temp;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
