import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "abf16a181707215c76c36b50d7bbe33c";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,

            };
            console.log(result);
            return result;
        } catch (err) {
           throw err;
        }
    }


    const handleChange = (e) => {
        setCity(e.target.value);
        // console.log(e.target.value);
    };

    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required /> <br /><br />
                <Button variant="contained" type='Submit'  >
                    Search
                </Button>
                {error && <p style={{ color: "red" }}> No such place exists !!</p>}
            </form>
        </div>
    )
}

export default SearchBox;