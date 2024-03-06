console.log("Connected");

const API_KEY="8c7d1cc05af54248a4b90328240303";

const locationContainer = document.getElequmentById("location");
console.log(locationContainer);

const dataContainer = document.getElequmentById("data");
console.log(dataContainer);

const city = "Delhi";

async function getWeather() {    
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`; 
  const result = await fetch(url);
  console.log(result);

}

getWeather();