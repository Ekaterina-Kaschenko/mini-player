import React from 'react';

type PlayAnimationProps = {
  isPlaying: boolean;
};

export const PlayAnimation: React.FC<PlayAnimationProps> = ({ isPlaying }) => {
  return (
    <div className='play-animation'>
      <div className={`wave wave1 ${isPlaying ? 'animate' : ''}`} />
      <div className={`wave wave2 ${isPlaying ? 'animate' : ''}`} />
      <div className={`wave wave3 ${isPlaying ? 'animate' : ''}`} />
    </div>
  );
};