import { getTimerValue } from '@features/Quiz/utils/getTimerValue';
import React, { useEffect, useState, Dispatch, SetStateAction, FC } from 'react';

interface TimerProps {
  endDate: Date | null;
  startDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  testFinished: boolean;
}

export const Timer: FC<TimerProps> = ({ endDate, startDate, setStartDate, testFinished }) => {
  const [timer, setTimer] = useState(getTimerValue(endDate, startDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!testFinished) {
        setTimer(getTimerValue(endDate, startDate));
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [endDate, startDate, testFinished]);

  useEffect(() => {
    if (timer.seconds === 30 || testFinished) {
      setStartDate(null);
    }
  }, [timer.seconds, setStartDate]);

  return (
    <div>
      {timer.minutes}:{timer.seconds}
    </div>
  );
};
