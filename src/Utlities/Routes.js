import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import ErrorTemplate from "../Components/ErrorTemplate/ErrorTemplate";
import Home from "../Components/Home/Home";
import Main from "../Components/layout/Main";
import Quiz from "../Components/Quiz/Quiz";
import Statistics from "../Components/Statistics/Statistics";
import Topics from "../Components/Topics/Topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorTemplate />,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/topics", element: <Topics /> },
      {
        path: "/quiz/:quizId",
        element: <Quiz></Quiz>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          ),
      },
      {
        path: "/blogs",
        loader: async () => await fetch('blogs.json'),
        element: <Blogs />,
      },
      { path: "/statistics", element: <Statistics /> }

    ],
  },
]);

export default router;
