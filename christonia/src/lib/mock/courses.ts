const courses = [
  {
    id: "randomCourse",
    name: "Some Course",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/tracks/[trackId]/[courseId]",
    imageLink: "/default-course-logo.png",
  },
];

export function getCourses() {
  return courses;
}
