import React, { FC, useEffect, useState } from 'react';
import { Header } from '@components/Header/Header';
import { Content } from '@components/Content/Content';
import './Quiz.css';

import { useDispatch } from 'react-redux';

import { setTimeOver } from '../slice';

interface PropQuiz {}

export const Quiz: FC<PropQuiz> = () => {
  const [progress, setProgress] = useState(0);
  const endDate = null;
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    if (startDate === null) {
      dispatch(setTimeOver(true));
    }
  }, [startDate, dispatch]);

  return (
    <div>
      <Header endDate={endDate} startDate={startDate} setStartDate={setStartDate} />
      <Content progress={progress} setProgress={setProgress} />
    </div>
  );
};
