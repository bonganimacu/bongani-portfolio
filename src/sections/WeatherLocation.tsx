import { motion } from 'framer-motion';
import { MapPin, Thermometer, Droplets, Wind, Clock, CloudRain, Cloud, Sun, Loader2, RefreshCw } from 'lucide-react';
import { useWeather } from '@/hooks/useWeather';

const weatherIconMap: Record<string, React.ElementType> = {
  '01d': Sun,
  '01n': Sun,
  '02d': Cloud,
  '02n': Cloud,
  '03d': Cloud,
  '03n': Cloud,
  '04d': Cloud,
  '04n': Cloud,
  '09d': CloudRain,
  '09n': CloudRain,
  '10d': CloudRain,
  '10n': CloudRain,
  '11d': CloudRain,
  '11n': CloudRain,
  '13d': Cloud,
  '13n': Cloud,
  '50d': Cloud,
  '50n': Cloud,
};

export function WeatherLocation() {
  const { weather, loading, error, retry } = useWeather();

  const WeatherIcon = weather ? weatherIconMap[weather.icon] || Cloud : Cloud;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-primary-900/10 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <h3 className="text-lg font-semibold text-text-primary dark:text-white">Current Location</h3>
        </div>
        {error && (
          <button
            onClick={retry}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-text-muted dark:text-gray-500 hover:text-primary-600 transition-colors"
            aria-label="Retry loading weather"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        )}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 text-primary-500 animate-spin" />
          <span className="ml-3 text-sm text-text-secondary dark:text-gray-400">Detecting your location...</span>
        </div>
      ) : weather ? (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-2xl font-bold text-text-primary dark:text-white">
                {weather.city}, {weather.country === 'ZA' ? 'South Africa' : weather.country}
              </p>
              <p className="text-sm text-text-secondary dark:text-gray-400 capitalize">
                {weather.condition}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <WeatherIcon className="w-10 h-10 text-primary-500" />
              <span className="text-4xl font-bold text-primary-800 dark:text-primary-400">
                {weather.temp}°C
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-white/5">
              <Thermometer className="w-4 h-4 text-primary-500" />
              <div>
                <p className="text-xs text-text-muted dark:text-gray-500">Feels Like</p>
                <p className="text-sm font-semibold text-text-primary dark:text-white">{weather.feelsLike}°C</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-white/5">
              <Droplets className="w-4 h-4 text-primary-500" />
              <div>
                <p className="text-xs text-text-muted dark:text-gray-500">Humidity</p>
                <p className="text-sm font-semibold text-text-primary dark:text-white">{weather.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-white/5">
              <Wind className="w-4 h-4 text-primary-500" />
              <div>
                <p className="text-xs text-text-muted dark:text-gray-500">Wind</p>
                <p className="text-sm font-semibold text-text-primary dark:text-white">{weather.windSpeed} km/h</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-light-border dark:border-dark-border">
            <Clock className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-text-secondary dark:text-gray-400">
              Local time: {weather.localTime}
            </span>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <Cloud className="w-8 h-8 text-text-muted dark:text-gray-600 mx-auto mb-2" />
          <p className="text-sm text-text-secondary dark:text-gray-400">Weather unavailable</p>
        </div>
      )}
    </motion.div>
  );
}
