import React, { Dispatch, FC, SetStateAction } from 'react';
import { DataArrayElementType } from '__mock__/types';

import './ProgressBar.css';

export interface ProgressBarProps {
  workArr: DataArrayElementType[];
  navigationBarFunc: (el: DataArrayElementType) => void;
  progress: number;
  dataRefresh: boolean;
  setProgress: Dispatch<SetStateAction<number>>;
}

export const ProgressBar: FC<ProgressBarProps> = ({ workArr, navigationBarFunc, progress }) => {
  return (
    <div className={'content__progress'}>
      {workArr?.map((el) => {
        if (el.statusChecked !== 'compleat') {
          el.id === progress ? (el.statusChecked = 'current') : '';
        }
        return (
          <div
            key={el.id}
            onClick={() => {
              navigationBarFunc(el);
            }}
            className={
              el.statusChecked === 'compleat'
                ? 'progress__line_ready'
                : el.statusChecked === 'current'
                ? 'progress__line_active'
                : 'progress__line_start'
            }
          ></div>
        );
      })}
    </div>
  );
};
