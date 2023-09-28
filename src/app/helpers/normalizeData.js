export const normalizeData = (data) => {
  return data.map(item => {
    const current = {
      date: item.dt,
      maxTemp: item.temp.max,
      minTemp: item.temp.min,
      description: item.weather[0].description,
      icon: item.weather[0].icon
    }
    return current;
  });
};
