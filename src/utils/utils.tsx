// Format seconds to mm:ss
export const formatTime = (time: number): string => {
  if (!isFinite(time) || isNaN(time)) return '--:--';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};
