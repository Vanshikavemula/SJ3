// 1.1 Lets capture a DOM element in HTML using JS
const button = document.getElementById("btn");
console.log(button);

const API_KEY="8c7d1cc05af54248a4b90328240303";


 const city = document.getElementById("city");
 const temp = document.getElementById("temp");
 const humidity = document.getElementById("humid");

  button.addEventListener("click", async(e) => {
    e.preventDefault();
    console.log("Clicked")
    const inputValue = document.getElementById("weatherInput").value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputValue}&aqi=no`;
  

  const response = await fetch(url);
  const finalData = await response.json();
console.log(response);
  console.log(finalData);

  city.innerText = inputValue;
  temp.innerText = finalData.current.temp_c;
  humidity.innerText = finalData.current.humidity;

  
 

 
 });
