import React, { useState } from 'react';

type AudioProps = {
  src: string;
  audioRef: React.RefObject<HTMLAudioElement | null>;
};
export const Audio: React.FC<AudioProps> = ({ src, audioRef }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    console.error(`Failed to load audio source: ${src}`);
    setHasError(true);
  };

  return hasError ? (
    <div style={{ color: 'red' }}>
      Failed to load station. Please try again later.
    </div>
  ) : (
    <audio key={src} ref={audioRef} onError={handleError}>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};