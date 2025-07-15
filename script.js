const apikey="73921de33d5a718f996777393a98292e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=kigali";

async function checkWeather() {
  const response = await fetch(apiUrl +`&appid=${apikey}`);
  var data = await response.json();
  console.log(data)
  document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp;
document.querySelector(".humidity").innerHTML=data.main.humidity;
document.querySelector(".wind").innerHTML=data.wind.speed;
}
checkWeather();

