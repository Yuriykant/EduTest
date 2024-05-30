import React from 'react';
import { DataArrayElementType } from '__mock__/types';

export type ElementType = {
  answerText: string;
  id: number;
  selected: boolean;
};

export type AnswerElementType = {
  0: string;
  1: ElementType;
};

export interface AnswerOptionsProps {
  el: DataArrayElementType;
  radioAnswerClick: (el: DataArrayElementType, answerVariant?: AnswerElementType) => void;
  checkBoxAnswerClick: (answerVariant?: AnswerElementType) => void;
}

export function AnswerOptions({ el, radioAnswerClick, checkBoxAnswerClick }: AnswerOptionsProps) {
  return (
    <div className={'content__answers_item'}>
      {el.answerVariants
        ? Object.entries(el.answerVariants).map((answerVariant) => {
            return (
              <div key={answerVariant[1].id + 3} className={'answers_item_element'}>
                {!el.singleAnswer && (
                  <input
                    checked={answerVariant[1].selected}
                    type="radio"
                    onChange={() => {
                      radioAnswerClick(el, answerVariant);
                    }}
                  ></input>
                )}
                {el.singleAnswer && (
                  <input
                    checked={answerVariant[1].selected}
                    type="checkbox"
                    onChange={() => {
                      checkBoxAnswerClick(answerVariant);
                    }}
                  ></input>
                )}
                <div>{answerVariant[1].answerText}</div>
              </div>
            );
          })
        : ''}
    </div>
  );
}
