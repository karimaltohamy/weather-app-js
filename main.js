let input = document.querySelector("input");
let search = document.querySelector("button span");
let result = document.querySelector(".result");

search.addEventListener("click", (e)=> {
    e.preventDefault()

    let cityName = input.value
    let key = "d0214336bd4120c77a767ccb05a93d34"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`
    fetch(url).then(api => api.json())
    .then((data) => {
        console.log(data);
        console.log(data.name)
        let temp = Math.trunc(data.main.temp).toString().split("").slice(0,2).join("");
        let tempMax = Math.trunc(data.main.temp_max).toString().split("").slice(0,2).join("")
        let tempMin = Math.trunc(data.main.temp_min).toString().split("").slice(0,2).join("")
        console.log(data.weather[0].icon)
        console.log(data.weather[0].description)
        console.log(data.wind.speed)
        console.log(data.main.humidity)

        if (data.weather[0].description == "clear sky") {
            document.body.style.background = 'url("./images/clear sky.jpg")'
        }

        if (data.weather[0].description == "haze") {
            document.body.style.background = 'url("./images/haze.jpg")'
        }

        if (data.weather[0].main == "Rain") {
            document.body.style.background = 'url("./images/rain.jpg")'
        }

        if (data.weather[0].main == "Clouds") {
            document.body.style.background = 'url("./images/broken clouds.jpg")'
        }

        if (data.weather[0].main == "Clouds") {
            document.body.style.background = 'url("./images/few clouds.jpg")'
        }

        result.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <span class = "temp">${temp}<b>°C</b></span>
            <p>Max: <span>${tempMax}°</span> | Min: <span>${tempMin}°</span></p>
            <div class = "box-img">
                <img class = "icon" src= "https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                <span class= "description">${data.weather[0].description}</span>
            </div>
            <p class="humidity">Humidity: ${data.main.humidity}%</p>
            <p class="speed">Speed: ${data.wind.speed}%</p>
        `;

        
    }).catch(() => {
        if (cityName.length === 0) {
            result.innerHTML = `<h3>The Input is Emty, you should write here</h3>`
        }else {
            result.innerHTML = `<h3>City Name Not Found</h3>`
        }

        
    })
    
})