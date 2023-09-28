'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getCurrentWeather } from './services/axios';
import WeatherCard from './components/WeatherCard/WeatherCard';
import { formatTemperature } from './helpers/formatTemperature';
import Background from './assets/background.png';
import { useUserConfigContext } from './context/userConfig';
import styles from './page.module.scss';
import { convertDate } from './helpers/convertDate';
import { normalizeData } from './helpers/normalizeData';

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
  const unit = 'metric'; // TODO:
  const [weatherData, setWeatherData] = useState(null);
  const [foreCastData, setForeCastData] = useState([]);

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
      } catch (error) {
        // TODO: handle error
      }
    };

    getWeatherData(location.lat, location.lon);
  }, [location, unit]);

  return (
    <main className={styles.main}>
      <div className={styles.main__wrapper}>
        {weatherData && (
          <WeatherCard
            isToday
            icon={weatherData.icon}
            unitType={unit}
            date={weatherData.date}
            temp={formatTemperature(weatherData.temp)}
            description={weatherData.description}
            alerts={weatherData.alerts}
            minTemp={weatherData.minTemp}
            maxTemp={weatherData.maxTemp}
          />
        )}
        <ul className="z-30 flex flex-col md:flex-row m-4">
          {foreCastData.map((item, index) => {
            const onClickHandler = () => {
              // TODO: redirect
            };

            return (
              <li key={index} className="m-2">
                <WeatherCard
                  icon={item.icon}
                  unitType={unit}
                  date={item.date}
                  temp={item.temp}
                  description={item.description}
                  alerts={item.alerts}
                  minTemp={item.minTemp}
                  maxTemp={item.maxTemp}
                  onClick={onClickHandler}
                />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="fixed top-0 left-0 z-0 h-screen w-screen">
        <Image
          className="z-0"
          src={Background}
          alt="background"
          quality="100"
          fill
        />
      </div>
    </main>
  );
}
