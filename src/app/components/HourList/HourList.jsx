import PropTypes from 'prop-types';
import HourCard, { hourCardTypes} from '@/app/components/HourCard/HourCard';

import styles from './HourList.module.scss';

const HourList = ({ hourlyData }) => (
  <ul className={styles['hour-list']}>
    {hourlyData.map(({ time, temp, feelsLike, description, uvi, icon }, index) =>
      <HourCard
        time={time}
        temp={temp}
        feelsLike={feelsLike}
        description={description}
        uvi={uvi}
        icon={icon}
        key={index}
      />
    )}
  </ul>
);

HourList.propTypes = {
  hourlyData: PropTypes.arrayOf(PropTypes.shape(hourCardTypes)).isRequired,
};

export default HourList;
