import { useEffect, useState } from 'react';
import { fetchStations } from './api/stations';
import { StationList } from './components/StationList/StationList';
import './App.css';
import { Station } from './types/stations';


function App() {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('stations', stations);
  }, [stations]);

  useEffect(() => {
    fetchStations()
      .then((data) => {
        setStations(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <div className='main'>
      <h1 className="page-title">Mini TuneIn Player</h1>
      {loading && <p>Loading stations...</p>}
      <StationList stations={stations} />
    </div>
  );
}

export default App;
