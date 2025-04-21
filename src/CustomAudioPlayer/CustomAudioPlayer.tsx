import {
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  forwardRef
} from 'react';
import './CustomAudioPlayer.css';
import { usePlayerContext } from '../context/usePlayerContext';
import { Controls } from './components/Controls';
import { VolumeControl } from './components/VolumeControl';
import { PlayAnimation } from './components/PlayAnimation';


type CustomAudioPlayerProps = {
  src: string;
};

export const CustomAudioPlayer = forwardRef<HTMLAudioElement, CustomAudioPlayerProps>(
  ({ src }, ref) => {
    const {
      stations,
      selectedStation,
      setSelectedStation,
      autoplay
    } = usePlayerContext();

    const internalRef = useRef<HTMLAudioElement>(null);
    const [volume, setVolume] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);


    useImperativeHandle(ref, () => internalRef.current as HTMLAudioElement, []);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.volume = volume;
      }
    }, [volume]);

    useEffect(() => {
      const audio = internalRef.current;
      if (!audio) return;
    
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
    
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
    
      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }, []);

    useEffect(() => {
      const audio = internalRef.current;
      if (!audio || !autoplay) return;

      audio.load();

      audio
        .play()
        .then(() => {
          console.log('[CustomAudioPlayer] Playing:', src);
        })
        .catch((err) => {
          console.warn('[CustomAudioPlayer] Autoplay failed:', err);
        });
    }, [src, autoplay]);

    return (
      <div className='custom-audio-player'>
        <PlayAnimation isPlaying={isPlaying} />
        <Controls
          audioRef={internalRef}
          stations={stations}
          selectedStation={selectedStation}
          setSelectedStation={setSelectedStation}
        />
        <VolumeControl volume={volume} onChange={setVolume} />
        <audio key={src} ref={internalRef}>
          <source src={src} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
);
