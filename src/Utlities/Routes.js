import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import ErrorTemplate from "../Components/ErrorTemplate/ErrorTemplate";
import Home from "../Components/Home/Home";
import Main from "../Components/layout/Main";
import Quiz from "../Components/Quiz/Quiz";
import Statistics from "../Components/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorTemplate />,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/statistics", element: <Statistics /> },
      {
        path: '/quiz/:quizId',
        element: <Quiz></Quiz>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
    ],
  },
]);

export default router;
