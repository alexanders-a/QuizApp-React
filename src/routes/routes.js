import QuizRoute from "../components/quiz";
import SelectCategory from "../components/quiz/components/category/SelectCategory";

const routes = [
  {
    path: "/quiz",
    element: <SelectCategory />,
  },
  {
    path: "quiz/:category",
    element: <QuizRoute />,
  },
];
export default routes;
