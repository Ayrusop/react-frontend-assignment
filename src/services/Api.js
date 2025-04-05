import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_API_KEY = "84003f496720b2ecaca344b0b5cf3c54"; 

// Fetch posts from JSONPlaceholder API
export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts?_limit=5`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// Fetch weather data from OpenWeather API
export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};
