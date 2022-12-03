export const timeTakenCalculator = (startDate: Date, endDate: Date) => {
  const diff = new Date(endDate).getTime() - new Date(startDate).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / 1000 / 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return {
    hours,
    minutes,
    seconds,
  };
};
