import PropTypes from 'prop-types';
import styles from './AlertList.module.scss';
import Alert , {alertType} from '@/app/components/Alert';

const AlertList = ({ alerts }) => {
  // TODO: remove return if not needee
  return (
    <ul className={styles['alert-list']}>
      {alerts.map(({ sender, event, description, start }, index) => (
        <Alert
          key={index}
          sender={sender}
          event={event}
          description={description}
          start={start}
          end={start}
        />))}
    </ul>)
};

AlertList.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape(alertType)), // TODO:check type
};

export default AlertList;