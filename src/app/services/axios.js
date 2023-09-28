import axios from 'axios';

const EXCLUDE = 'minutely,hourly';

export const getCurrentWeather = async (lat, lon, unitType) => {
  try {
    const response = await axios.get(`${process.env.apiUrl}?lat=${lat}&lon=${lon}&appid=${process.env.apiKey}&units=${unitType}&exclude=${EXCLUDE}`);
    const { data } = response;

    if (!data) return null;

    return data;
  } catch (error) {
    return error;
  }
};
