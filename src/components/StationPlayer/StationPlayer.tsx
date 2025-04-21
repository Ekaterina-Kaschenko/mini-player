import React, { useEffect, useRef } from 'react';
import { Station } from '../../types/stations';
import './StationPlayer.css';
import { usePlayerContext } from '../../context/usePlayerContext';

type StationPlayerProps = {
  station: Station;
  autoplay: boolean;
};

export const StationPlayer: React.FC<StationPlayerProps> = () => {
  const { selectedStation, autoplay } = usePlayerContext();

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (selectedStation && audioRef.current) {
      audioRef.current.load();
      if (autoplay) {
        audioRef.current
          .play()
          .catch((err) => {
            console.warn('Autoplay failed:', err);
          });
      }
    }
  }, [selectedStation, autoplay]);

  if (!selectedStation) return null;

  return (
    <div className='player'>
      <img src={selectedStation.imgUrl} alt={selectedStation.name} className='player-image' />
      <h2 className='player-name'>{selectedStation.name}</h2>
      <audio ref={audioRef} controls className='player-audio'>
        <source src={selectedStation.streamUrl} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <p className='player-description'>{selectedStation.description}</p>
    </div>
  );
};
