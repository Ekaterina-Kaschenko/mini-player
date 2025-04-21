import { useEffect, useState } from 'react';
import { fetchStations } from './api/stations';
import { Content } from './components/Content/Content';
import { AutoplayToggle } from './components/AutoplayToggle/AutoplayToggle';
import { usePlayerContext } from './context/usePlayerContext';

import './App.css';

function App() {
  const { setStations, setSelectedStation } = usePlayerContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStations()
      .then((data) => {
        setStations(data);
      })
      .catch(console.error) // todo: show the error for user
      .finally(() => setLoading(false));
  }, [setStations, setSelectedStation]);

  return (
    <div className='main'>
      <h1 className='page-title'>Mini TuneIn Player</h1>
      <AutoplayToggle />
      {loading && <p>Loading stations...</p>}
      <Content />
    </div>
  );
}

export default App;
