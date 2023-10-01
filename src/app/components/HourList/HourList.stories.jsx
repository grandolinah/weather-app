import HourList from './HourList';

const defaultData = [
  {
    time: 1684952747,
    temp: 24,
    feelsLike: 25,
    description: 'broken clouds',
    uvi: 1,
    icon: '04n',
  },
  {
    time: 1684952747,
    temp: 24,
    feelsLike: 25,
    description: 'broken clouds',
    uvi: 1,
    icon: '04n',
  },
];

const component = {
  component: HourList
};

export const Primary = {
  args: {
    hourlyData: defaultData,
  }
};

export default component;
