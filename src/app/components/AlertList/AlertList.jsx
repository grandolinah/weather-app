import PropTypes from 'prop-types';
import Alert, { alertType } from '@/app/components/Alert';

const AlertList = ({ alerts }) => (
  <ul>
    {alerts.map(({ sender, event, description, start }, index) => (
      <Alert
        key={index}
        sender={sender}
        event={event}
        description={description}
        start={start}
        end={start}
      />))}
  </ul>
);

AlertList.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape(alertType)),
};

export default AlertList;
