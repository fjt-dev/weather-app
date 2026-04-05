// 天気カード(天気表示部分)
import type { OpenMeteoResponse } from '../types';
import weatherCode from '../utils/weatherCode';

type Props = {
  weather: OpenMeteoResponse;
  locationName: string;
};

const WeatherCard = ({ weather, locationName }: Props) => {
  const { icon, label } = weatherCode[weather.current.weather_code];
  const date = new Date(weather.current.time).toLocaleString('ja-JP');
  const tempMax = weather.daily.temperature_2m_max[0];
  const tempMin = weather.daily.temperature_2m_min[0];

  return (
    <div className="card bg-base-100 shadow p-6 gap-2 rounded-lg flex-1">
      <p><span className='text-sm'>取得日時：{date}</span></p>
      <p><span className="font-bold font-lg">{locationName}</span></p>
      <div className="flex items-center gap-2">
        <img src={`/icons/${icon}.svg`} alt={label} className="w-16 h-16" />
        <span className="text-2xl">{label}</span>
      </div>
      <p>
        <span className="font-bold">気温：</span>
        {weather.current.temperature_2m}°C / <span className="font-bold">湿度：</span>
        {weather.current.relative_humidity_2m}%
      </p>
      <p>
        <span className="font-bold">最高気温：</span>
        <span className="text-red-500">{tempMax}°C</span> / <span className="font-bold">最低気温：</span>
        <span className="text-blue-500">{tempMin}°C</span>
        {/* 最高気温：{tempMax}°C / 最低気温：{tempMin}°C */}
      </p>
    </div>
  );
};

export default WeatherCard;
