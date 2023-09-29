import { getDate, convertTime} from './convertDate';

export const normalizeData = (data) =>data.map(item => (
  {
    date: item.dt,
    maxTemp: item.temp.max,
    minTemp: item.temp.min,
    description: item.weather[0].description,
    icon: item.weather[0].icon
  }
));

export const filterData = (data, currentDate) => data.hourly.filter(item => {
  const curDate = getDate(item.dt)
  const day = getDate(currentDate);

  return curDate === day;
});

export const normalizeHourlyData = (data, currentDate) => {
  const filtered = filterData(data, currentDate);

  return filtered.map(item => ({
    date: getDate(item.dt),
    time: convertTime(item.dt),
    temp: item.temp,
    feelsLike: item.feels_like,
    description: item.weather[0].description,
    icon: item.weather[0].icon,
    uvi: item.uvi
  }));
};

export const normalizeAlerts = (data) => data.map(item => ({
  sender: item.sender_name,
  event: item.event,
  description: item.description,
  start: item.start,
  end: item.end
}));
