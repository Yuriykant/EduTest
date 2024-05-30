interface TimerValue {
  minutes: number;
  seconds: number;
}

export const getTimerValue = (endDate: Date | null, startDate: Date | null): TimerValue => {

  if (!startDate && !endDate) {
    return {
      minutes: 0,
      seconds: 0,
    };
  }

  if (startDate === null) {
    return {
      minutes: 0,
      seconds: 0,
    };
  }

  if (endDate === null) {
    endDate = new Date();
  }

  const diffInSecconds = Math.floor(
    (endDate.getTime() - startDate.getTime()) / 1000
  );
  const minutes = Math.floor(diffInSecconds / 60);
  const seconds = diffInSecconds % 60;

  return {
    minutes,
    seconds,
  };
}