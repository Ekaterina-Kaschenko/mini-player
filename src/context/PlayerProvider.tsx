import React, { useState } from 'react';
import { PlayerContext } from './PlayerContext';
import { Station } from '../types/stations';

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [autoplay, setAutoplay] = useState<boolean>(true);

  return (
    <PlayerContext.Provider
      value={{
        stations,
        setStations,
        selectedStation,
        setSelectedStation,
        autoplay,
        setAutoplay,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
