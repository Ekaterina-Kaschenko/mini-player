import React from 'react';
import { StationItem } from '../StationItem/StationItem';
import './StationList.css';
import { usePlayerContext } from '../../context/usePlayerContext';

export const StationList: React.FC = () => {
  const { stations } = usePlayerContext();

  return (
    <div className='list'>
      {stations.map((station) => (
        <StationItem key={station.id} station={station} />
      ))}
    </div>
  );
};