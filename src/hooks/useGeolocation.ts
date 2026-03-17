// 位置情報の取得
import { useState, useEffect } from 'react';
import type { Coordinates } from '../types';

const useGeolocation = () => {
  const [coords, setCoords] = useState<Coordinates | undefined>(undefined);
  const [permitted, setPermitted] = useState<boolean>(false);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      setPermitted(true);
    });
  }, []);
  return { coords, permitted };
};

export default useGeolocation;
