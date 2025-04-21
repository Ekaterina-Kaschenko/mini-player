import { createContext } from 'react';
import { Station } from '../types/stations';

export type PlayerContextType = {
  stations: Station[];
  setStations: (stations: Station[]) => void;
  selectedStation: Station | null;
  setSelectedStation: (station: Station | null) => void;
  autoplay: boolean;
  setAutoplay: (value: boolean) => void;
};

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);
