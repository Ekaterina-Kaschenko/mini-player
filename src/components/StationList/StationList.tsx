import React from 'react';
import { StationItem } from '../StationItem/StationItem';
import './StationList.css';
import { Station } from '../../types/stations';

type StationListProps = {
  stations: Station[];
  onSelectStation: (station: Station) => void;
};

export const StationList: React.FC<StationListProps> = ({ stations, onSelectStation }) => {
  return (
    <div className="list">
      {stations.map((station) => (
        <StationItem key={station.id} station={station} onClick={() => onSelectStation(station)}
        />
      ))}
    </div>
  );
};