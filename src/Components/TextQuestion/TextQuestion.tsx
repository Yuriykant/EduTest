import React, { Dispatch, SetStateAction } from 'react';
import { DataArrayElementType } from '__mock__/types';
import './TextQuestion.css';

interface TextQuestionProps {
  el: DataArrayElementType;
  textValue: string;
  setTextValue: Dispatch<SetStateAction<string>>;
  textAreaHandleChange: (e: React.ChangeEvent<HTMLTextAreaElement>, el: DataArrayElementType) => void;
}

export function TextQuestion({ el, textValue, textAreaHandleChange }: TextQuestionProps) {
  return (
    <div className="content__answers">
      <textarea
        value={textValue || el.textAnswer}
        onChange={(e) => textAreaHandleChange(e, el)}
        className="content__answers_item"
      ></textarea>
    </div>
  );
}
