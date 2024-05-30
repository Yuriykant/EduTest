import React, { FC, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import './Header.css';
import { Timer } from '@components/Timer/Timer';

interface HeaderProps {
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  endDate: Date | null;
  startDate: Date | null;
}

export const Header: FC<HeaderProps> = ({ setStartDate, endDate, startDate }) => {
  const [testFinished, setTestFinished] = useState(false);
  return (
    <section className={'header-content'}>
      <h1>Тестирование</h1>
      <Timer endDate={endDate} startDate={startDate} setStartDate={setStartDate} testFinished={testFinished} />
      <button
        onClick={() => {
          localStorage.removeItem('progress');
          setStartDate(null);
          setTestFinished(true);
        }}
        className={'header-content__timer'}
      >
        {' '}
        Закончить тест
      </button>
    </section>
  );
};
