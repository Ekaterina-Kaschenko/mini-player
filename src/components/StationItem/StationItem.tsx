import React from 'react';
import './StationItem.css';

type Station = {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  streamUrl: string;
};

type StationItemProps = {
  station: Station;
};

export const StationItem: React.FC<StationItemProps> = ({ station }) => {
  return (
    <div className="item">
      <img className="image" src={station.imgUrl} alt={station.name} />
      <h2 className="name">{station.name}</h2>
    </div>
  );
};