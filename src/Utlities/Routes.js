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
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/blog", element: <Blog /> },
      { path: "/statistics", element: <Statistics /> },
    ],
  },
]);

export default router;
