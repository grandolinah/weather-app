import WeatherCard from './WeatherCard';

const defaultData = {
  icon: '04n',
  date: '1695848656',
  temp: '17.48',
  description: 'broken clouds',
  alerts: [],
  unitType: 'metric', // TODO: unitType
};

const component = {
  component: WeatherCard,
};

export const Primary = {
  args: {
    ...defaultData
  },
};

export default component;
