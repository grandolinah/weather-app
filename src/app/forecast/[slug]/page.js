'use client'
import { useEffect, useState } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import colors from 'tailwindcss/colors';
import { getCurrentWeather } from '@/app/services/axios';
import { useUserConfigContext } from '@/app/context/userConfig';
import { normalizeHourlyData } from '@/app/helpers/normalizeData';
import HourList from '@/app/components/HourList';
import { convertDate } from '@/app/helpers/convertDate';
import styles from './page.module.scss';

export default function Page({ params }) {
  const { state: { unit } } = useUserConfigContext();
  const [hourlyData, setHourlyData] = useState([]);
  const [date, setDate] = useState(null)
  const [location, setLocation] = useState({
    lat: '',
    lon: ''
  });
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    const urlData = params.slug.split('-');
    const urlDate = urlData.shift();

    setLocation({
      lat: urlData[0],
      lon: urlData[1]
    });
    setDate(urlDate)
  }, [params.slug]);

  useEffect(() => {
    if (!location.lat || !location.lon || !date) return;

    const getWeatherData = async (lat, lon) => {
      try {
        const response = await getCurrentWeather(lat, lon, unit, true);

        if (!response) return;

        const data = normalizeHourlyData(response, date);

        setHourlyData(data);
        setIsLoaderVisible(false);
      } catch (error) {
        // TODO: handle error
        console.log(error);
      }
    };

    getWeatherData(location.lat, location.lon);
  }, [unit, location, date]);

  return isLoaderVisible ? (
        <CircleLoader
      color={colors.fuchsia[400]}
      loading
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    ) : (
    <div className={styles['detail-page']}>
      {date && <h2 className={styles['detail-page__title']}>Weather forecast for {convertDate(date)} </h2>}
      <HourList hourlyData={hourlyData} />
    </div>
  );
}
