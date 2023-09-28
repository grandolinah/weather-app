import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './WeatherCard.module.scss';
import { convertDate } from '../../helpers/convertDate';

const WeatherCard = ({
  isToday = false,
  icon,
  unitType,
  date,
  temp,
  minTemp,
  maxTemp,
  description,
  alerts = []
}) => {
  const iconUrl = `${process.env.imageUrl}${icon}.png`;
  const unit = unitType === 'metric' ? '°C' : ''; // TODO: handle unit types
  const currentDate = convertDate(date);

  return (
    <div className={styles['weather-card']}>
      <div className={styles['weather-card__date-wrapper']}>
      {isToday && <p className={styles['weather-card__date-title']}>Today</p>}
      <p className={styles['weather-card__date']}>{currentDate}</p>
      </div>
      <Image
        src={iconUrl}
        alt="weather-icon"
        width={60}
        height={60}
      />
      <div className={styles['weather-card__info']}>
        <p>{description}</p>
      </div>
      <div className={styles['weather-card__temperature-wrapper']}>
        {temp && (
        <p className={styles['weather-card__temperature']}>{temp}{unit}</p>
        )}
          <p><span className={styles['weather-card__info']}>min:</span>{minTemp}{unit}</p>
          <p><span className={styles['weather-card__info']}>max:</span>{maxTemp}{unit}</p>
      </div>

      {!!alerts.length && ( // TODO: handle alerts
        <div>
          Alerts:
        </div>
      )}
    </div>
  );
};

WeatherCard.propTypes = {
  icon: PropTypes.string.isRequired,
  unitType: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  temp: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alerts: PropTypes.arrayOf(PropTypes.object) // TODO: check type
};

export default WeatherCard;
