import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from 'App/store';
import './Content.css';

import { ProgressBar } from '../ProgressBar/ProgressBar';
import { TextQuestion } from '../TextQuestion/TextQuestion';
import { AnswerElementType, AnswerOptions } from '../AnswerOptions/AnswerOptions';
import { AnswerButton } from '../AnswerButton/AnswerButton';

import { DataArrayElementType } from '../../__mock__/types';
import { testDataArray } from '../../__mock__/mockQuestion';

type IRootStoreType = ReturnType<typeof store.getState>;

interface PropsContent {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

export const Content: FC<PropsContent> = ({ progress, setProgress }) => {
  const testOverTime: boolean = useSelector((state: IRootStoreType) => state.appRedux.timeOver);
  const [testStatusOver, setTestStatusOver] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [workArr, setWorkArr] = useState<DataArrayElementType[]>([]);
  const [dataRefresh, setDataRefresh] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    workArr.length === 0 ? setWorkArr(testDataArray) : '';
    localStorage.getItem('progress') !== null ? setWorkArr(JSON.parse(localStorage.getItem('progress') || '')) : '';
  }, []);

  function setActiveButton(el: DataArrayElementType): boolean {
    if (el.freeQuestion) {
      return !!textValue || !!el.textAnswer;
    }
    const newArr: boolean[] = [];
    const allVars: Array<AnswerElementType> = Object.entries(el.answerVariants);
    allVars.forEach((item: AnswerElementType) => {
      newArr.push(item[1].selected);
    });
    const result = textValue ? true : newArr.find((el) => el === true);
    return result !== undefined ? result : false;
  }

  const navigationBarFunc = (el: DataArrayElementType): void => {
    if (el.statusChecked === 'compleat' || el.statusChecked === 'current') {
      dataRefresh ? setDataRefresh(false) : setDataRefresh(true);
      setProgress(el.id);
    }
  };

  const answerButtonClick = (el: DataArrayElementType) => {
    if (setActiveButton(el)) {
      el.statusChecked = 'compleat';
      localStorage.setItem('progress', JSON.stringify(workArr));
      setTextValue('');
      testDataArray.length - 1 > progress ? setProgress(el.id + 1) : setTestStatusOver(true);
      setWorkArr(JSON.parse(localStorage.getItem('progress') || ''));
      setError('');
    } else {
      setError('Поля не заполнены');
    }
  };

  const textAreaHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, el: DataArrayElementType): void => {
    setTextValue(e.target.value);
    el.textAnswer = e.target.value;
    dataRefresh ? setDataRefresh(false) : setDataRefresh(true);
  };

  const radioAnswerClick = (el: DataArrayElementType, answerVariant?: AnswerElementType): void => {
    const allAnswers = Object.entries(el.answerVariants);
    for (let i = 0; i <= Object.entries(el.answerVariants).length - 1; i += 1) {
      const newData = allAnswers[i][1];
      newData.selected = false;
    }
    answerVariant ? (answerVariant[1].selected = true) : '';
    dataRefresh ? setDataRefresh(false) : setDataRefresh(true);
  };

  const checkBoxAnswerClick = (answerVariant?: AnswerElementType): void => {
    if (answerVariant) {
      answerVariant[1].selected ? (answerVariant[1].selected = false) : (answerVariant[1].selected = true);
    }
    dataRefresh ? setDataRefresh(false) : setDataRefresh(true);
  };

  return (
    <div className={'content'}>
      {testOverTime && (
        <h3 style={{ position: 'absolute', top: '275px', color: 'red' }}>Время теста вышло, тест завершен</h3>
      )}

      <ProgressBar
        workArr={workArr}
        navigationBarFunc={navigationBarFunc}
        progress={progress}
        dataRefresh={dataRefresh}
        setProgress={setProgress}
      />

      {testStatusOver && <h2 style={{ position: 'absolute' }}> Тест завершен </h2>}

      {!testStatusOver && (
        <>
          {workArr?.map((el) => {
            return (
              <div key={el.id + 1} className={el.id === progress ? 'content__question_block' : 'item__element_display'}>
                <h2 className={'content__question'}>{el.questionText}</h2>

                {el.freeQuestion && (
                  <TextQuestion
                    el={el}
                    textValue={textValue}
                    setTextValue={setTextValue}
                    textAreaHandleChange={textAreaHandleChange}
                  />
                )}

                {!el.freeQuestion && (
                  <AnswerOptions
                    el={el}
                    radioAnswerClick={radioAnswerClick}
                    checkBoxAnswerClick={checkBoxAnswerClick}
                  />
                )}

                <AnswerButton
                  el={el}
                  setActiveButton={setActiveButton}
                  answerButtonClick={answerButtonClick}
                  error={error}
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
