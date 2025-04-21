import React from 'react';
import './StationItem.css';
import { usePlayerContext } from '../../context/usePlayerContext';
import { Station } from '../../types/stations';

type StationItemProps = {
  station: Station;
  onClick?: () => void;
};

export const StationItem: React.FC<StationItemProps> = ({ station }) => {
  const { setSelectedStation } = usePlayerContext();

  return (
    <div className='item' onClick={() => setSelectedStation(station)}>
      <img className='image' src={station.imgUrl} alt={station.name} />
      <h2 className='name'>{station.name}</h2>
    </div>
  );
};