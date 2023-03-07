const API_KEY = "f34226b8317feebe5c91ec105e324c0c"
const CITY = "Tampere"

const showForecast = (data) => {

    console.log(data.list[0].main.temp);
    console.log(data.list[0].dt_txt);

    const temps = data.list.map(item => item.main.temp);
    const datetimes = data.list.map(item => item.dt_txt);
    const feelsLikeTemp = data.list.map(item => item.main.feels_like);
    const windspeed = data.list.map(item => item.wind.speed);
    
    const context = document.getElementById('forecast').getContext("2d");
    const windContext = document.getElementById('wind').getContext('2d');
    const myChart = new Chart(context, {
        type: "line",
        data: {
            labels: datetimes,
            datasets: [{
                label: "Temperature (Celcius)",
                backgroundColor: "pink",
                borderColor: "pink",
                borderWidth: 4,
                pointRadius: 4,
                pointHoverRadius: 15,
                data: temps
            },{
          
                label: "Feels Like Temperature (Celcius)",
                backgroundColor: "darkblue",
                borderColor: "darkblue",
                borderWidth: 4,
                pointRadius: 4,
                pointHoverRadius: 10,
                data: feelsLikeTemp
            }],
        },
        options: {
            plugins: {
            title: {
                display: true,
                text: `${CITY} Forecast`
            }
        },
        scales: {
            y: {
                min: -20,
                max: 20
            }
        },
        layout: {
            padding: 35
        }
        }
    })
    const windChart = new Chart("wind", {
        type: "line",
        data: {
            labels: datetimes,
            datasets: [{
                label: "Windspeed (m/s)",
                backgroundColor: "lightblue",
                borderColor: "lightblue",
                borderWidth: 4,
                pointRadius: 4,
                pointHoverRadius: 10,
                data: windspeed
            }]
        }
    })
  
}

const fetchWeather = async() => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${CITY}&appid=${API_KEY}`);

        const data = await response.json();
        console.log(data);
        showForecast(data);


    } catch (error) {
        console.log(error);
    }
}

fetchWeather();


