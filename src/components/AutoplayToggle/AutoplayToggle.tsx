import React from 'react';
import { usePlayerContext } from '../../context/usePlayerContext';

export const AutoplayToggle:  React.FC = () => {
  const { autoplay, setAutoplay } = usePlayerContext();

  return (
    <label className='autoplay-toggle'>
      <input
        type='checkbox'
        checked={autoplay}
        onChange={(e) => setAutoplay(e.target.checked)}
      />
      Autoplay on station click
    </label>
  );
};