import Image from 'next/image';
import PropTypes from 'prop-types';
import { getImageUrl } from '@/app/helpers/getImageUrl';
import { getUnit } from '@/app/helpers/getUnit';
import { useUserConfigContext } from '@/app/context/userConfig';
import styles from './HourCard.module.scss';


const HourCard = ({
  time,
  temp,
  feelsLike,
  description,
  uvi,
  icon,
}) => {
  const { state: { unit } } = useUserConfigContext();
  const iconUrl = getImageUrl(icon);
  const unitType = getUnit(unit);

  return (
    <li className={styles['hour-card']}>
      <div className={styles['hour-card__border']} />
      <div className={styles['hour-card__wrapper']}>
        <time className={styles['hour-card__time']}>{time}</time>
        <Image
          src={iconUrl}
          alt="weather-icon"
          width={60}
          height={60}
        />
        <p className={styles['hour-card__temp']}>{temp}{unitType}</p>
        <p className={styles['hour-card__description']}>
          <span className={styles['hour-card__info']}>feels like:</span>
          <span className={styles['hour-card__temp']}>{feelsLike}{unitType}</span>
        </p>
        <p className={styles['hour-card__description']}>
          <span className={styles['hour-card__info']}>UV:</span>
          {uvi}</p>
        <p className={styles['hour-card__description']}>
          {description}</p>
      </div>
    </li>
  );
};

export const hourCardTypes = HourCard.propTypes = {
  time: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  feelsLike: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  uvi: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default HourCard;

