// Open-Meteo API
export interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    weather_code: number;
  };
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

// Nominatim API
export interface NominatimReverse {
  display_name: string;
}

// export interface NominatimSearch {
//   lat: number;
//   lon: number;
//   display_name: string;
// }

// coordinate
export interface Coordinates {
  latitude: number;
  longitude: number;
}

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,weather_code

// {"latitude":52.52,"longitude":13.419998,"generationtime_ms":14.065265655517578,"utc_offset_seconds":0,"timezone":"GMT","timezone_abbreviation":"GMT","elevation":38.0,"current_units":{"time":"iso8601","interval":"seconds","temperature_2m":"°C","relative_humidity_2m":"%","weather_code":"wmo code"},"current":{"time":"2026-03-11T08:15","interval":900,"temperature_2m":10.2,"relative_humidity_2m":75,"weather_code":2},"daily_units":{"time":"iso8601","temperature_2m_max":"°C","temperature_2m_min":"°C"},"daily":{"time":["2026-03-11","2026-03-12","2026-03-13","2026-03-14","2026-03-15","2026-03-16","2026-03-17"],"temperature_2m_max":[16.8,13.6,16.1,9.6,12.4,10.2,12.5],"temperature_2m_min":[7.1,6.1,3.5,6.3,4.7,3.9,3.5]}}
