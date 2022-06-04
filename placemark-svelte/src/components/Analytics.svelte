<script>

    // Need to import the lat and lon of the points of interest and pass them as variables.
    import dotenv from "dotenv";

    // const api_key = process.env.openweather;
    // const lat = 0;
    // const lon = 0;

    // dotenv.config();

    const weatherData = (
        async () => {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=52.3&lon=-1.17&appid=631946dcaae6f50f876945a2ab0f1eb9&units=metric')
            return await response.json()
        }
    )()
    // const airData = (
    //     async () => {
    //         const response = await fetch('https://api.openweathermap.org/data/2.5/air_pollution?lat=53&lon=-7.7&appid=631946dcaae6f50f876945a2ab0f1eb9')
    //         return await response.json()
    //     }
    // )()

</script>

{#await weatherData} 
	<p>...waiting</p>
{:then weatherData}

<div class="flex-container">
    <table class="table is-striped is-hoverable">
        <tr>
            <th>Area</th>
            <th>Weather</th>
            <th>Temperature</th>
            <th>Wind</th>
            <th>Pressure</th>
        </tr>
        <tr>
            <td>{weatherData.name}, {weatherData.sys.country}</td>
            <td>Outlook: {weatherData.weather[0].description}</td>
            <td>{weatherData.main.temp}	&#8451</td>
            <td>Speed: {weatherData.wind.speed} m/s</td>
            <td>{weatherData.main.pressure} hPa</td>
        </tr>
        <tr>
            <td>Longitude: {weatherData.coord.lon}</td>
            <td>Visibility: {weatherData.visibility} m</td>
            <td>Feels like: {weatherData.main.feels_like}	&#8451</td>
            <td>Direction: {weatherData.wind.deg} &#176;</td>
            <td></td>
        </tr>
        <tr>
            <td>Latitude: {weatherData.coord.lat}</td>
            <td>Cloud cover: {weatherData.clouds.all}%</td>
            <td>Min: {weatherData.main.temp_min}	&#8451</td>
            <td>Gusts: {weatherData.wind.gust} m/s</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Max: {weatherData.main.temp_max}	&#8451</td>
            <td></td>
            <td></td>
        </tr>
    </table>
</div>

{:catch error}
	<p>An error occurred!</p>
{/await}

