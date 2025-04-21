import React, {
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  forwardRef
} from 'react';
import './CustomAudioPlayer.css';
import { usePlayerContext } from '../context/usePlayerContext';
import { formatTime } from '../utils/utils';

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
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    const currentIndex = stations.findIndex(s => s.id === selectedStation?.id);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.volume = volume;
      }
    }, [volume]);

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
    

    useImperativeHandle(ref, () => internalRef.current as HTMLAudioElement, []);

    const togglePlay = () => {
      if (!internalRef.current) return;

      if (isPlaying) {
        internalRef.current.pause();
      } else {
        internalRef.current.play().catch(err => {
          console.warn('Playback failed:', err);
        });
      }
    };

    const playNext = () => {
      if (stations.length === 0) return;
      const nextIndex = (currentIndex + 1) % stations.length;
      setSelectedStation(stations[nextIndex]);
    };

    const playPrevious = () => {
      if (stations.length === 0) return;
      const prevIndex = (currentIndex - 1 + stations.length) % stations.length;
      setSelectedStation(stations[prevIndex]);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (internalRef.current) {
        internalRef.current.currentTime = parseFloat(e.target.value);
      }
    };

    // Listen to audio events (time update, duration, play/pause)
    useEffect(() => {
      const audio = internalRef.current;
      if (!audio) return;

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
      const handleLoadedMetadata = () => setDuration(audio.duration);

      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }, []);

    return (
      <div className='custom-audio-player'>
        <div className='controls'>
          <div className='progress'>
            <span>{formatTime(currentTime)}</span>
            <input
              type='range'
              min={0}
              max={isFinite(duration) ? duration : 0}
              value={isFinite(currentTime) ? currentTime : 0}
              onChange={handleSeek}
              step={0.1}
            />
            <span>{formatTime(duration)}</span>
          </div>

          <div className='main-buttons'>
            <button className='skip' onClick={playPrevious}>⏮</button>
            <button className='play' onClick={togglePlay}>
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button className='skip' onClick={playNext}>⏭</button>
          </div>

          <div className='volume'>
            <span>🔉</span>
            <input
              type='range'
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </div>
        </div>

        <audio key={src} ref={internalRef}>
          <source src={src} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
);
