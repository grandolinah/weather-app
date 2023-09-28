import WeatherCard from './WeatherCard';

const defaultData = {
  weatherData: {
    dt: 1695848656,
    sunrise: 1695874792,
    sunset: 1695917704,
    temp: 17.48,
    feels_like: 16.95,
    pressure: 1024,
    humidity: 64,
    dew_point: 10.6,
    uvi: 0,
    clouds: 75,
    visibility: 10000,
    wind_speed: 3.09,
    wind_deg: 150,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n'
      }
    ]
  },
  unitType: 'metric', // TODO: unitType
};

const component = {
  component: WeatherCard,
};

export const Primary = {
  args: {
    weatherData: defaultData.weatherData,
    unitType: defaultData.unitType
  },
};

export default component;
