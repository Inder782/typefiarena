export const formatStopwatch = (time: number) => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const ms = Math.floor(time % 1000) / 10;

  // Format with padding zeros
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMs = String(ms).padStart(2, "0");

  // Return formatted time string
  return `${formattedMinutes}:${formattedSeconds}.${formattedMs}`;
};
