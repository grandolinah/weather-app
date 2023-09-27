import axios from 'axios';

export const getCurrentWeather = async (lat, lon, unitType) => {
  try {
    const response = await axios.get(`${process.env.apiUrl}?lat=${lat}&lon=${lon}&appid=${process.env.apiKey}&units=${unitType}`);
    const { data } = response;

    if (!data) return null;

    return data;
  } catch (error) {
    return error;
  }
};
