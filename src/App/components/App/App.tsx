import React, { FC } from 'react';
import { Quiz } from '@features/Quiz/components/Quiz';
import '../../common.css';

export const App: FC = () => {
  return (
    <div className="container">
      <Quiz />
    </div>
  );
};
