import useGeolocation from './hooks/useGeolocation';
import useWeather from './hooks/useWeather';
import useReverseGeocode from './hooks/useReverseGeocode';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import MapView from './components/MapView';

function App() {
  const { coords, permitted } = useGeolocation();
  const { weather, loading, error } = useWeather(coords);
  const { locationName } = useReverseGeocode(coords);

  if (!permitted) return <p>位置情報を許可してください。</p>;
  if (loading) return <p>読み込み中…</p>;
  if (error) return <p>{error}</p>;
  if (!weather || !locationName || !coords) return null;
  return (
    <div className="flex gap-4 p-4">
      <div className="flex flex-col gap-4">
        <SearchBar />
        <WeatherCard weather={weather} locationName={locationName} />
      </div>
      <MapView coords={coords} />
    </div>
  );
}

export default App;
