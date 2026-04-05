import { useState, useEffect } from 'react';
import type { Coordinates, NominatimReverse } from '../types';

// 地名を取得するための関数
const fetchLocationName = async (coords: Coordinates): Promise<NominatimReverse> => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json&zoom=10`
  );
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

const useReverseGeocode = (coords: Coordinates | undefined) => {
  const [locationName, setLocationName] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  // コンポーネント起動時に地名を取得
  useEffect(() => {
    if (!coords) return;

    const getLocationName = async () => {
      setLoading(true);
      try {
        const data = await fetchLocationName(coords);
        setLocationName(data.display_name);
      } catch {
        setError('地名の取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };
    getLocationName();
  }, [coords]);
  return { locationName, error, loading };
};

export default useReverseGeocode;
