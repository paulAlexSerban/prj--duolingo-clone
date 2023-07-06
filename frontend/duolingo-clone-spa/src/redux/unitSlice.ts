import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import ImageLesson1 from "../assets/two-people-talking.jpg";
import ImageLesson2 from "../assets/tapas-and-beer.jpg";
import ImageLesson3 from "../assets/travel.jpg";

type UnitUpdate = {
  id: number;
  state: "enabled" | "finished";
};

type LessonUpdate = {
  unitId: number;
  lessonId: number;
  lessonState: "enabled" | "finished";
};

export interface UnitState {
  id: number;
  title: string;
  description: string;
  enabled: boolean;
  finished: boolean;
  lessons: {
    id: number;
    title: string;
    description: string;
    avatar: string;
    enabled: boolean;
    finished: boolean;
    exercises: {
      title: string;
      question: string;
      answers: {
        option: string;
        valid: boolean;
      }[];
    }[];
  }[];
}

const initialState: UnitState[] = [
  {
    id: 1,
    title: "Unit 1",
    description: "Form basic sentences, greet people",
    enabled: true,
    finished: false,
    lessons: [
      {
        id: 1,
        title: "Lesson 1",
        description: "Introduce yourself!",
        avatar: ImageLesson1,
        enabled: true,
        finished: false,
        exercises: [
          {
            title: "Read and Translate",
            question: "Hola, yo soy Pedro. Como te llamas?",
            answers: [
              {
                option: "Hey, I am Pedro. How are you?",
                valid: false,
              },
              {
                option: "Hey, I am Pedro. What is your name?",
                valid: true,
              },
              {
                option: "Hey, I am Pedro. How old are you?",
                valid: false,
              },
            ],
          },
          {
            title: "Fill in the blank",
            question: "Soy Ana. Yo soy una ...",
            answers: [
              {
                option: "hombre",
                valid: false,
              },
              {
                option: "mujer",
                valid: true,
              },
              {
                option: "gato",
                valid: false,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Lesson 2",
        description: "Order food and drinks",
        avatar: ImageLesson2,
        enabled: false,
        finished: false,
        exercises: [
          {
            title: "Read and Translate",
            question: "Tu comes pan?",
            answers: [
              {
                option: "Do you eat bread?",
                valid: true,
              },
              {
                option: "Does he eat bread?",
                valid: false,
              },
              {
                option: "You are eating bread.",
                valid: false,
              },
            ],
          },
          {
            title: "Fill in the blanks",
            question: "Yo ... agua. Tú ... leche",
            answers: [
              {
                option: "bebe / bebes",
                valid: false,
              },
              {
                option: "bebes / bebo",
                valid: false,
              },
              {
                option: "bebo / bebes",
                valid: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Unit 2",
    description: "Get around the city",
    enabled: false,
    finished: false,
    lessons: [
      {
        id: 1,
        title: "Lesson 1",
        description: "Explore the city",
        avatar: ImageLesson3,
        enabled: false,
        finished: false,
        exercises: [
          {
            title: "Fill in the blank",
            question: "Yo tengo una reserva en el ...",
            answers: [
              {
                option: "pan",
                valid: false,
              },
              {
                option: "hotel",
                valid: true,
              },
              {
                option: "coche",
                valid: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const unitSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    updateUnit: (state, action: PayloadAction<UnitUpdate>) => {
      state.map((unit: any) => {
        if (unit[`${action.payload.state}`] || unit.id === action.payload.id) {
          return (unit[`${action.payload.state}`] = true);
        }
        return (unit[`${action.payload.state}`] = false);
      });
    },
    updateLesson: (state, action: PayloadAction<LessonUpdate>) => {
      const unitIndex = state.findIndex(
        (unit) => unit.id === action.payload.unitId
      );
      state[unitIndex].lessons.map((lesson: any) => {
        if (
          lesson[`${action.payload.lessonState}`] ||
          lesson.id === action.payload.lessonId
        ) {
          return (lesson[`${action.payload.lessonState}`] = true);
        } else {
          return (lesson[`${action.payload.lessonState}`] = false);
        }
      });
    },
  },
});

export const { updateUnit, updateLesson } = unitSlice.actions;

export default unitSlice.reducer;