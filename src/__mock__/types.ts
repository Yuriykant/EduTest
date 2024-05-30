export type AnswerVariant = {
  selected: boolean;
  answerText: string;
  id: number;
};

export type FileAnswer = {
  selected: boolean;
  file: File | null;
  id: number;
};

export type ImageAnswer = {
  selected: boolean;
  imageUrl: string;
  id: number;
};

export type DataArrayElementType = {
  id: number;
  freeQuestion: boolean;
  questionText: string;
  singleAnswer: boolean;
  answerVariants: Record<string, AnswerVariant>;
  fileAnswer?: FileAnswer;
  imageAnswer?: ImageAnswer;
  textAnswer: string;
  rightAnswerId: number[];
  statusChecked: string;
};