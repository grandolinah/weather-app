import axios from 'axios';

const EXCLUDE = 'minutely,hourly';
const EXCLUDE_FORECAST = 'minutely,current,daily';

const createUrl = (lat, lon, unitType, isDetailPage = false) => `${process.env.apiUrl}?lat=${lat}&lon=${lon}&appid=${process.env.apiKey}&units=${unitType}&exclude=${isDetailPage ? EXCLUDE_FORECAST : EXCLUDE}`;

export const getCurrentWeather = async (lat, lon, unitType, isDetail = false) => {
  try {
    const url = createUrl(lat, lon, unitType, isDetail);
    const response = await axios.get(url);
    const { data } = response;

    if (!data) return null;

    return data;
  } catch (error) {
    return error;
  }
};
