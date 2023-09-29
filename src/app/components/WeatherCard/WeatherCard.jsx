import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './WeatherCard.module.scss';
import { convertDate } from '@/app/helpers/convertDate';
import { getUnit } from '@/app/helpers/getUnit';
import { getImageUrl } from '@/app/helpers/getImageUrl';

const WeatherCard = ({
  isToday = false,
  icon,
  unitType,
  date,
  temp = null,
  minTemp,
  maxTemp,
  description
}) => {
  const iconUrl = getImageUrl(icon);
  const unit = getUnit(unitType)
  const currentDate = convertDate(date);
  const weatherCardClass = classNames(styles['weather-card'], { [styles['weather-card--active']]: !isToday });

  return (
    <div className={weatherCardClass}>
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
    </div>
  );
};

export const weatherCardType = WeatherCard.propTypes = {
  icon: PropTypes.string.isRequired,
  unitType: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  temp: PropTypes.number,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default WeatherCard;
