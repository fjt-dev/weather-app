// 天気データ取得
import { useEffect, useState } from 'react';
import type { Coordinates, OpenMeteoResponse } from '../types';

// 天気情報を取得するための関数
const fetchWeather = async (coords: Coordinates): Promise<OpenMeteoResponse> => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,weather_code&timezone=auto`
  );
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

const useWeather = (coords: Coordinates | undefined) => {
  const [weather, setWeather] = useState<OpenMeteoResponse | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  // コンポーネント起動時に天気情報を取得
  useEffect(() => {
    if (!coords) return;

    const getWeather = async () => {
      setLoading(true);
      try {
        const data = await fetchWeather(coords);
        setWeather(data);
      } catch {
        setError('天気の取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };
    getWeather();
  }, [coords]);
  return { weather, error, loading };
};

export default useWeather;

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,weather_code
