import HourCard from './HourCard';

const defaultData = {
  time: 1684952747,
  temp: 24,
  feelsLike: 25,
  description: 'broken clouds',
  uvi: 1,
  icon: '04n',
};

const component = {
  component: HourCard,
};

export const Primary = {
  args: {
    ...defaultData
  },
};

export default component;
