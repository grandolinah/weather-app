'use client'
import { useState, useEffect } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import colors from 'tailwindcss/colors';
import { getCurrentWeather } from './services/axios';
import WeatherList from './components/WeatherList/WeatherList';
import { normalizeData } from './helpers/normalizeData';
import { useUserConfigContext } from './context/userConfig';
import { CHANGE_LOCATION } from './context/userConfig/actions';

const OPTIONS = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export default function Home() {
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
  });
  const { state: { unit }, dispatch } = useUserConfigContext();
  const [weatherData, setWeatherData] = useState(null);
  const [foreCastData, setForeCastData] = useState([]);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    const onSuccessGetLocation = (position) => {
      const { coords: { latitude, longitude } } = position;

      setLocation({
        lat: latitude,
        lon: longitude
      });

      dispatch({
        type: CHANGE_LOCATION, payload: {
          lat: latitude,
          lon: longitude
        }
      });
    };

    const onErrorGetLocation = (error) => {
      // TODO: handle error
      console.log(error);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccessGetLocation, onErrorGetLocation, OPTIONS);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!location.lat) return;

    const getWeatherData = async (lat, lon) => {
      try {
        const response = await getCurrentWeather(lat, lon, unit);

        if (!response) return;

        const today = response.daily.shift();
        const nextFourDays = response.daily.slice(0, 4);
        const currentWeather = {
          icon: response.current.weather[0].icon,
          date: response.current.dt,
          description: response.current.weather[0].description,
          temp: response.current.temp || 0,
          alerts: response.current.alerts || [],
          minTemp: today.temp.min,
          maxTemp: today.temp.max
        };
        const normalizedForecast = normalizeData(nextFourDays);

        setWeatherData(currentWeather);
        setForeCastData(normalizedForecast);
        setIsLoaderVisible(false);
      } catch (error) {
        // TODO: handle error
        console.log(error);
      }
    };

    getWeatherData(location.lat, location.lon);
  }, [location, unit]);

  return isLoaderVisible ? (
    <CircleLoader
      color={colors.fuchsia[400]}
      loading
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    ) : (
    <WeatherList
      weatherData={weatherData}
      foreCastData={foreCastData}
    />
  );
}
