import PropTypes from 'prop-types';
import Link from 'next/link';
import WeatherCard, { weatherCardType } from '../WeatherCard';
import styles from './WeatherList.module.scss';
import { formatTemperature } from '@/app/helpers/formatTemperature';
import { useUserConfigContext } from '@/app/context/userConfig';
import AlertList from '../AlertList';
import { alertType } from '@/app/components/Alert';

const WeatherList = ({
  weatherData,
  foreCastData,
  alerts = [{
    sender: 'NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)',
    event: 'Small Craft Advisory',
    start: 1684952747,
    end: 1684988747,
    description: '...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.',
  },
  {
    sender: 'NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)',
    event: 'Small Craft Advisory',
    start: 1684952747,
    end: 1684988747,
    description: '...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.',
  }]
}) => {
  const { state: { unit, location } } = useUserConfigContext();

  const buildUrl = (date) => `/forecast/${encodeURIComponent(`${date}-${location.lat}-${location.lon}`)}`;

  return (
    <div className={styles['weather-list']}>
      <div className={styles['weather-list__wrapper']}>
        {weatherData && (
          <Link href={buildUrl(weatherData.date)}>
            <WeatherCard
              isToday
              icon={weatherData.icon}
              unitType={unit}
              date={weatherData.date}
              temp={formatTemperature(weatherData.temp)}
              description={weatherData.description}
              alerts={weatherData.alerts}
              minTemp={formatTemperature(weatherData.minTemp)}
              maxTemp={formatTemperature(weatherData.maxTemp)}
            />
          </Link>
        )}
        {!!alerts.length && (
          <AlertList alerts={alerts} />
        )}
      </div>
      <ul className={styles['weather-list__list-wrapper']}>
        {foreCastData.map((item, index) => (
          <li key={index} className={styles['weather-list__list-item']}>
            <Link href={buildUrl(item.date)}>
              <WeatherCard
                icon={item.icon}
                unitType={unit}
                date={item.date}
                temp={item.temp}
                description={item.description}
                alerts={item.alerts}
                minTemp={item.minTemp}
                maxTemp={item.maxTemp}
              />
            </Link>
          </li>
        )
        )}
      </ul>
    </div >
  );
};

WeatherList.propTypes = {
  weatherData: PropTypes.shape(weatherCardType),
  foreCastData: PropTypes.arrayOf(PropTypes.shape(weatherCardType)),
  alerts: PropTypes.arrayOf(PropTypes.shape(alertType)), // TODO:check type
};

export default WeatherList;
