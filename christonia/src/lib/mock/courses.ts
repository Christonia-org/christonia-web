import { getModule } from "./modules";

const courses = [
  {
    id: "randomCourse1",
    name: "Some Course",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageLink: "/default-course-logo.svg",
    modules: [getModule(0), getModule(1), getModule(2)],
  },
  {
    id: "randomCourse2",
    name: "Some Course",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageLink: "/default-course-logo.svg",
    modules: [getModule(0), getModule(2)],
  },
  {
    id: "randomCourse3",
    name: "Some Course",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageLink: "/default-course-logo.svg",
    modules: [getModule(1), getModule(2)],
  },
];

const foundationsCourse = {
  id: "foundations",
  name: "Foundations",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  imageLink: "/default-course-logo.svg",
  modules: [getModule(0), getModule(1), getModule(2)],
};

export function getCourses() {
  return courses;
}

export function getCourseById(courseId: string) {
  return courses.find((course) => course.id === courseId);
}

export function getFoundationsCourse() {
  return foundationsCourse;
}
