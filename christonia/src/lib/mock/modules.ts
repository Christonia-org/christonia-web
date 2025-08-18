import { assert } from "console";

const modules = [
  {
    id: "module1",
    items: [
      {
        id: "item1",
        title: "Lesson 1",
        link: "lessons/lesson-1",
        type: "lesson",
      },
      {
        id: "item2",
        title: "Lesson 2",
        link: "lessons/lesson-2",
        type: "lesson",
      },
      {
        id: "item3",
        title: "Quiz",
        link: "quizzes/quiz-1",
        type: "quiz",
      },
      {
        id: "item4",
        title: "Lesson 3",
        link: "lessons/lesson-3",
        type: "lesson",
      },
      {
        id: "item5",
        title: "Blog Assignment",
        link: "lessons/blog-assignment-1",
        type: "blog-assignment",
      },
    ],
  },
  {
    id: "module2",
    items: [
      {
        id: "item1",
        title: "Lesson 1",
        link: "lessons/lesson-1",
        type: "lesson",
      },
      {
        id: "item2",
        title: "Lesson 2",
        link: "lessons/lesson-2",
        type: "lesson",
      },
      {
        id: "item3",
        title: "Quiz",
        link: "quizzes/quiz-1",
        type: "quiz",
      },
    ],
  },
  {
    id: "module3",
    items: [
      {
        id: "item1",
        title: "Lesson 1",
        link: "lessons/lesson-1",
        type: "lesson",
      },
      {
        id: "item2",
        title: "Blog Assignment",
        link: "lessons/blog-assignment-1",
        type: "blog-assignment",
      },
    ],
  },
];

export function getModules() {
  return modules;
}

export function getModule(index: number) {
  assert(index >= 0 && index < modules.length);
  return modules[index];
}
