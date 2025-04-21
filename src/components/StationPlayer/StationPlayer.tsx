import React from 'react';
import './StationPlayer.css';
import { usePlayerContext } from '../../context/usePlayerContext';
import { CustomAudioPlayer } from '../../CustomAudioPlayer/CustomAudioPlayer';

export const StationPlayer: React.FC = () => {
  const { selectedStation } = usePlayerContext();

  if (!selectedStation) return null;

  return (
    <div className='player'>
      <img
        src={selectedStation.imgUrl}
        alt={selectedStation.name}
        className='player-image'
      />
      <h2 className='player-name'>{selectedStation.name}</h2>
      <CustomAudioPlayer
        key={selectedStation.id}
        src={selectedStation.streamUrl}
      />
      <p className='player-description'>{selectedStation.description}</p>
    </div>
  );
};
