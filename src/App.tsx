import { useEffect, useState } from 'react';
import { fetchStations } from './api/stations';
import { Station } from './types/stations';
import { Content } from './components/Content/Content';
import { AutoplayToggle } from './components/AutoplayToggle/AutoplayToggle';

import './App.css';

function App() {
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [loading, setLoading] = useState(true);
  const [autoplay, setAutoplay] = useState(true);

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
      <AutoplayToggle value={autoplay} onChange={setAutoplay} />

      {loading && <p>Loading stations...</p>}
      <Content
        stations={stations}
        selectedStation={selectedStation}
        onSelectStation={setSelectedStation}
        autoplay={autoplay}
      />
    </div>
  );
}

export default App;
