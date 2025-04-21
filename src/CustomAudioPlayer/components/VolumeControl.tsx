import React from 'react';

type VolumeControlProps = {
  volume: number;
  onChange: (value: number) => void;
};

export const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onChange }) => {
  return (
    <div className='volume'>
      <span role='img' aria-label='Volume'>
        🔉
      </span>
      <input
        type='range'
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};
