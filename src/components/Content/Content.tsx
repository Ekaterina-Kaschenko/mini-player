import { usePlayerContext } from '../../context/usePlayerContext';
import { StationList } from '../StationList/StationList';
import { StationPlayer } from '../StationPlayer/StationPlayer';
import './Content.css';

export const Content: React.FC = () => {
  const { selectedStation, autoplay } = usePlayerContext();

  return (
    <div className='content'>
      <StationList />
      {selectedStation && <StationPlayer station={selectedStation} autoplay={autoplay} />}
    </div>
  );
};