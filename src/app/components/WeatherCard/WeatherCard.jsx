import Image from 'next/image';
import styles from './WeatherCard.module.scss';
import { convertDate } from '@/app/helpers/convertDate';

const WeatherCard = ({ weatherData, unitType }) => {
  const iconUrl = `${process.env.imageUrl}${weatherData.weather[0].icon}.png`;
  const unit = '°C'; // TODO: handle unit types
  const date = convertDate(weatherData.dt);

  return (
    <div className={styles['weather-card']}>
      <div className={styles['weather-card__date-wrapper']}>
      <p className={styles['weather-card__date-title']}>Today</p>
      <p className={styles['weather-card__date']}>{date}</p>
      </div>

      <Image
        src={iconUrl}
        alt="weather-icon"
        width={80}
        height={80}
      />
      <div>
        <p className={styles['weather-card__temperature']}>{weatherData.temp}{unit}</p>
      </div>
      <div className={styles['weather-card__info']}>
        <p>{weatherData.weather[0].description}</p>
      </div>
      {weatherData.alerts && ( // TODO: handle alerts
        <div>
          Alerts:
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
