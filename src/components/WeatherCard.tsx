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
    <div className="card bg-base-100 shadow p-6 gap-2">
      <p>取得日時：{date}</p>
      <p>{locationName}</p>
      <div className="flex items-center gap-2">
        <img src={`/icons/${icon}.svg`} alt={label} className="w-12 h-12" />
        <span>{label}</span>
      </div>
      <p>
        気温：{weather.current.temperature_2m}°C / 湿度：{weather.current.relative_humidity_2m}%
      </p>
      <p>
        最高気温：{tempMax}°C 最低気温：{tempMin}°C
      </p>
    </div>
  );
};

export default WeatherCard;
