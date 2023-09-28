import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './WeatherCard.module.scss';
import { convertDate } from '../../helpers/convertDate';
import { formatTemperature } from '../../helpers/formatTemperature';

const WeatherCard = ({
  icon,
  unitType,
  date,
  temp,
  description,
  alerts = []
}) => {
  const iconUrl = `${process.env.imageUrl}${icon}.png`;
  const unit = unitType === 'metric' ? '°C' : ''; // TODO: handle unit types
  const currentDate = convertDate(date);

  return (
    <div className={styles['weather-card']}>
      <div className={styles['weather-card__date-wrapper']}>
      <p className={styles['weather-card__date-title']}>Today</p>
      <p className={styles['weather-card__date']}>{currentDate}</p>
      </div>
      <Image
        src={iconUrl}
        alt="weather-icon"
        width={80}
        height={80}
      />
      <div>
        <p className={styles['weather-card__temperature']}>{formatTemperature(temp)}{unit}</p>
      </div>
      <div className={styles['weather-card__info']}>
        <p>{description}</p>
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
  temp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  alerts: PropTypes.arrayOf(PropTypes.object) // TODO: check type
};

export default WeatherCard;
