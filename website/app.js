/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// variables
let apiKey = "85809549041cdefbef629f3153fa24b7";
const newZip = document.getElementById("zip").value;
let country_code = "840";

// API of Coordinates by zip/post code

// let API_coordinatesByZipcode = `http://api.openweathermap.org/geo/1.0/zip?zip=${newZip},${country_code}&appid=${apiKey}`;

// let baseURL = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${apiKey}`;

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
  console.log("newZip:", newZip);
  getWeather(newZip, apiKey);
  console.log("API_coordinatesByZipcode:", API_coordinatesByZipcode);
}
const getWeather = async (newZip, apiKey) => {
  // const res = await fetch(`${API_coordinatesByZipcode}`);
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=85809549041cdefbef629f3153fa24b7"
  );
  try {
    const data = await res.json();
    console.log("data:", data);
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
