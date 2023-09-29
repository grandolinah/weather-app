import PropTypes from 'prop-types';
import styles from './Alert.module.scss';

const Alert = ({
  sender,
  event,
  description,
  start,
  end
}) => {
  return (
    <div role="alert" className={styles.alert}>
      <div className={styles.alert__title}>
        {event} from {sender}
      </div>
      <div className={styles.alert__wrapper}>
        <p className={styles.alert__description}>{description}</p>
        <time className={styles.alert__time}>{start} - {end}</time>
      </div>
    </div>
  );
};

export const alertType = Alert.propTypes = {
  sender: PropTypes.string,
  event: PropTypes.string,
  description: PropTypes.string,
  start: PropTypes.number,
  end: PropTypes.number,
};

export default Alert;
