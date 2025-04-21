import React, { useEffect, useState } from 'react';
import { Station } from '../../types/stations';

type ControlsProps = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  stations: Station[];
  selectedStation: Station | null;
  setSelectedStation: (station: Station) => void;
};

export const Controls: React.FC<ControlsProps> = ({
  audioRef,
  stations,
  selectedStation,
  setSelectedStation,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const currentIndex = stations.findIndex((s) => s.id === selectedStation?.id);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [audioRef]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.warn('Playback failed:', err);
      });
    }
  };

  const playNext = () => {
    if (!stations.length) return;
    const nextIndex = (currentIndex + 1) % stations.length;
    setSelectedStation(stations[nextIndex]);
  };

  const playPrevious = () => {
    if (!stations.length) return;
    const prevIndex = (currentIndex - 1 + stations.length) % stations.length;
    setSelectedStation(stations[prevIndex]);
  };

  return (
    <div className='controls'>
      <button className='skip' onClick={playPrevious}>⏮</button>
      <button className='play' onClick={togglePlay}>
        {isPlaying ? '⏸' : '▶'}
      </button>
      <button className='skip' onClick={playNext}>⏭</button>
    </div>
  );
};
