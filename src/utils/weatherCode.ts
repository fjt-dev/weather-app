import type { WeatherIconMap } from '../types';

const weatherCode: WeatherIconMap = {
  // 晴れ
  0: { icon: 'clear-day', label: '晴れ' },
  1: { icon: 'partly-cloudy-day', label: 'おおむね晴れ' },
  2: { icon: 'partly-cloudy-day', label: '晴れ時々曇り' },
  3: { icon: 'cloudy', label: '曇り' },
  // 霧
  45: { icon: 'fog', label: '霧' },
  48: { icon: 'fog', label: '着氷性の霧' },
  // 霧雨
  51: { icon: 'drizzle', label: '霧雨' },
  53: { icon: 'drizzle', label: '小雨' },
  55: { icon: 'rain', label: '雨' },
  56: { icon: 'drizzle', label: '着氷性の霧雨' },
  57: { icon: 'drizzle', label: '強い着氷性の霧雨' },
  // 雨
  61: { icon: 'rain', label: '小雨' },
  63: { icon: 'rain', label: '雨' },
  65: { icon: 'rain', label: '大雨' },
  66: { icon: 'sleet', label: 'みぞれ' },
  67: { icon: 'sleet', label: '強いみぞれ' },
  80: { icon: 'partly-cloudy-day-rain', label: 'にわか雨' },
  81: { icon: 'partly-cloudy-day-rain', label: '強いにわか雨' },
  82: { icon: 'partly-cloudy-day-rain', label: '激しいにわか雨' },
  // 雪
  71: { icon: 'snow', label: '小雪' },
  73: { icon: 'snow', label: '雪' },
  75: { icon: 'snow', label: '大雪' },
  77: { icon: 'snow', label: '雪粒' },
  85: { icon: 'partly-cloudy-day-snow', label: 'にわか雪' },
  86: { icon: 'partly-cloudy-day-snow', label: '強いにわか雪' }
};

export default weatherCode;

// https://open-meteo.com/en/docs#weather_variable_documentation
