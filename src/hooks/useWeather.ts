import { useState, useEffect, useCallback } from 'react';
import type { WeatherData } from '@/types';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const FALLBACK_CITY = 'Midrand';
const FALLBACK_COUNTRY = 'ZA';

interface UseWeatherReturn {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  retry: () => void;
}

export function useWeather(): UseWeatherReturn {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (lat?: number, lon?: number) => {
    setLoading(true);
    setError(null);

    try {
      let url: string;

      if (lat !== undefined && lon !== undefined) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${FALLBACK_CITY},${FALLBACK_COUNTRY}&units=metric&appid=${API_KEY}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid API key. Please check your .env configuration.');
        }
        throw new Error('Weather data unavailable');
      }

      const data = await response.json();

      const weatherData: WeatherData = {
        city: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        condition: data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6), // m/s to km/h
        localTime: new Date().toLocaleTimeString('en-ZA', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      };

      setWeather(weatherData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Weather unavailable');
      // Set fallback weather data
      setWeather({
        city: 'Midrand',
        country: 'ZA',
        temp: 22,
        feelsLike: 23,
        condition: 'clear sky',
        icon: '01d',
        humidity: 45,
        windSpeed: 12,
        localTime: new Date().toLocaleTimeString('en-ZA', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!API_KEY) {
      setError('Weather API key not configured');
      setLoading(false);
      setWeather({
        city: 'Midrand',
        country: 'ZA',
        temp: 22,
        feelsLike: 23,
        condition: 'clear sky',
        icon: '01d',
        humidity: 45,
        windSpeed: 12,
        localTime: new Date().toLocaleTimeString('en-ZA', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      });
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          fetchWeather();
        },
        { timeout: 10000 }
      );
    } else {
      fetchWeather();
    }
  }, [fetchWeather]);

  const retry = () => {
    fetchWeather();
  };

  return { weather, loading, error, retry };
}
