import React, { useEffect, useRef } from 'react';
import { Station } from '../../types/stations';
import './StationPlayer.css';

type StationPlayerProps = {
  station: Station;
  autoplay: boolean;
};

export const StationPlayer: React.FC<StationPlayerProps> = ({ station, autoplay }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (autoplay) {
        audioRef.current
          .play()
          .catch((err) => {
            console.warn('Autoplay failed:', err);
          });
      }
    }
  }, [station, autoplay]);

  return (
    <div className="player">
      <img src={station.imgUrl} alt={station.name} className="player-image" />
      <h2 className="player-name">{station.name}</h2>
      <audio ref={audioRef} controls className="player-audio">
        <source src={station.streamUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p className="player-description">{station.description}</p>
    </div>
  );
};
