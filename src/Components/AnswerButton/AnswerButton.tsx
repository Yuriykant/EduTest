import React from 'react';
import { DataArrayElementType } from '__mock__/types';
import './AnswerButton.css';

export interface AnswerButtonProps {
  el: DataArrayElementType;
  setActiveButton: (el: DataArrayElementType) => boolean;
  answerButtonClick: (el: DataArrayElementType) => void;
  error: string;
}

export const AnswerButton = ({ el, setActiveButton, answerButtonClick, error }: AnswerButtonProps) => {
  const handleButtonClick = () => {
    const setActive = setActiveButton(el);
    if (setActive !== undefined && setActive) {
      answerButtonClick(el);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          handleButtonClick();
        }}
        className={'content__button'}
        type="button"
      >
        Ответить
      </button>
      {error && <span style={{ color: 'red', position: 'absolute' }}>{error}</span>}
    </>
  );
};
