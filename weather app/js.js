// state
let currCity = "Abbottabad";
let units = "metric";

// Selectors
let city = document.querySelector(".weather__city");
let datetime = document.querySelector(".weather__datetime");
let weather__forecast = document.querySelector('.weather__forecast');
let weather__temperature = document.querySelector(".weather__temperature");
let weather__icon = document.querySelector(".weather__icon");
let weather__minmax = document.querySelector(".weather__minmax")
let weather__realfeel = document.querySelector('.weather__realfeel');
let weather__humidity = document.querySelector('.weather__humidity');
let weather__wind = document.querySelector('.weather__wind');
let weather__pressure = document.querySelector('.weather__pressure');







function getWeather(){
    let country  = document.querySelector('.weather__searchform').value
    country.innerText = ''
const url = `http://api.weatherapi.com/v1/forecast.json?key=9297dcd8b97b44d8b2d124349241312&q=${country}`

axios.get(url)
.then(function(response){
    const data = response.data
    console.log(data)
  
    city.innerText = `${data.location.name} , ${data.location.country}`
    datetime.innerText = `${data.current.last_updated}`
    weather__temperature.innerHTML = `<p class="weather__temperature">${data.current.temp_c}&#176C</p>`
    weather__realfeel.innerHTML = `<p class="weather__realfeel">${data.current.feelslike_c} &#176C</p>`
    weather__humidity.innerText = `${data.current.humidity}%`
    weather__wind.innerText = `${data.current.wind_kph} km/h`
    weather__pressure.innerText = `${data.current.pressure_mb} hPa`
    weather__icon.innerHTML = `<img src="https:${data.current.condition.icon}" aria-label="...">`
})
.catch(function(err){
    document.getElementById('errMsg').innerText = 'Davlat nomi xato'
    console.log(err)
}

)

}

