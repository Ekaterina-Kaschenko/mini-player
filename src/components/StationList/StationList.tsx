import React from 'react';
import { StationItem } from '../StationItem/StationItem';
import './StationList.css';

type Station = {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  streamUrl: string;
};

type StationListProps = {
  stations: Station[];
};

export const StationList: React.FC<StationListProps> = ({ stations }) => {
  return (
    <div className="list">
      {stations.map((station) => (
        <StationItem key={station.id} station={station} />
      ))}
    </div>
  );
};