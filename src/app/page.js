'use client'
import { useState, useEffect } from 'react';
import { getCurrentWeather } from './services/axios';

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export default function Home() {
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
  });
  const [unitType, setUnitType] = useState('metric');''
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const onSuccessGetLocation = (position) => {
      const { coords: { latitude, longitude } } = position;

      setLocation({
        lat: latitude,
        lon: longitude
      });
    };

    const onErrorGetLocation = (error) => {
      // TODO: handle error
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccessGetLocation, onErrorGetLocation, options);
    }
  }, []);

  useEffect(() => {
    if (!location.lat) return;

    const getWeatherData = async (lat, lon) => {
      try {
        const response = await getCurrentWeather(location.lat, location.lon, unitType);

        setWeatherData(response)
      } catch(error) {
        // TODO: handle error
      }
    };

    getWeatherData(location.lat, location.lon);
  }, [location, unitType]);

  return (
    <main className="flex bg-purple-300 h-screen">
      weather-app
    </main>
  );
};
