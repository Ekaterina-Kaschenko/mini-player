import { Station } from "../../types/stations";
import { StationList } from "../StationList/StationList";
import { StationPlayer } from "../StationPlayer/StationPlayer";
import './Content.css';

type ContentProps = {
  stations: Station[];
  selectedStation: Station | null;
  onSelectStation: (station: Station) => void;
  autoplay: boolean;
};

export const Content: React.FC<ContentProps> = ({ stations, selectedStation, onSelectStation, autoplay }) => {
  console.log('selectedStation', selectedStation);
  
  return (
    <div className="content">
      <StationList stations={stations} onSelectStation={onSelectStation} />
      {selectedStation && <StationPlayer station={selectedStation} autoplay={autoplay} />}
    </div>
  );
};