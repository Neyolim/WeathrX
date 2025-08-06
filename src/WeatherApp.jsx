import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./searchBox";
import Typography from '@mui/material/Typography';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.57,
    humidity: 99,
    temp: 23.57,
    tempMax: 23.57,
    tempMin: 23.57,
    weather: "overcast clouds",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'none',
          color: 'primary.main',
          mb: 2,
        }}
      >
        WeathrX
      </Typography> 

      <SearchBox updateInfo={updateInfo} />
     <br /> <br />
      <InfoBox info={weatherInfo} sx={{ mt: 3 }} />
    </div>
  );
}
