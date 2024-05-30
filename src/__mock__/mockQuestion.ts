import { DataArrayElementType } from "./types";

export const testDataArray: DataArrayElementType[] = [
  {
    id: 0,
    freeQuestion: false,
    questionText: "Вопрос 1",
    singleAnswer: false,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "Ответ 1",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "Ответ 2",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "Ответ 3",
        id: 3,
      },
    },

    textAnswer: "",
    rightAnswerId: [3, 1],
    statusChecked: "",
  },
  {
    id: 1,
    freeQuestion: false,
    questionText: "Вопрос 2",
    singleAnswer: true,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "Ответ 1 ",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "Ответ 2 ",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "Ответ 3 ",
        id: 3,
      },
    },
    textAnswer: "",
    rightAnswerId: [2],
    statusChecked: "",
  },
  {
    id: 2,
    freeQuestion: true,
    questionText: "Вопрос 3",
    singleAnswer: true,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "",
        id: 3,
      },
    },
    textAnswer: "",
    rightAnswerId: [],
    statusChecked: "",
  },
  {
    id: 3,
    freeQuestion: false,
    questionText: "Вопрос 4",
    singleAnswer: true,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "Ответ 1",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "Ответ 2",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "Ответ 3",
        id: 3,
      },
    },
    textAnswer: "",
    rightAnswerId: [],
    statusChecked: "",
  },
  {
    id: 4,
    freeQuestion: true,
    questionText: "Вопрос 5",
    singleAnswer: true,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "",
        id: 3,
      },
    },
    textAnswer: "",
    rightAnswerId: [],
    statusChecked: "",
  },
  {
    id: 5,
    freeQuestion: false,
    questionText: "Вопрос 6",
    singleAnswer: false,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "Ответ 1",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "Ответ 2",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "Ответ 3",
        id: 3,
      },
    },
    textAnswer: "",
    rightAnswerId: [],
    statusChecked: "",
  },
];