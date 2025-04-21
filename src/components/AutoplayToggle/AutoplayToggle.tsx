import React from 'react';

type AutoplayToggleProps = {
  value: boolean;
  onChange: (newValue: boolean) => void;
};

export const AutoplayToggle: React.FC<AutoplayToggleProps> = ({ value, onChange }) => {
  return (
    <label className="autoplay-toggle">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      Autoplay on station click
    </label>
  );
};