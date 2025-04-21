import { usePlayerContext } from '../../context/usePlayerContext';
import { StationList } from '../StationList/StationList';
import { StationPlayer } from '../StationPlayer/StationPlayer';
import './Content.css';

export const Content: React.FC = () => {
  const { selectedStation } = usePlayerContext();

  return (
    <div className='content'>
      <StationList />
      {selectedStation ? (
        <StationPlayer />
      ) : (
        <div className='station-placeholder'>
          <h2>Select a station</h2>
          <p>Choose something from the list to start listening 🎧</p>
        </div>
      )}
    </div>
  );
};