import React from 'react';

type AudioProps = {
  src: string;
  audioRef: React.RefObject<HTMLAudioElement | null>;
};

export const Audio: React.FC<AudioProps> = ({ src, audioRef }) => {
  return (
    <audio key={src} ref={audioRef}>
      <source src={src} type='audio/mpeg' />
      Your browser does not support the audio element.
    </audio>
  );
};