import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import CoursesPage from "../page/CoursesPage";
import App from "../App";
import CourseDetail from "../features/courses/CourseDetail";
import Accordion from "../components/CourseContent/Accordion/Accordion";
import Lecture from "../components/lecture/Lecture";
import CourseDescription from "../components/CourseDescription/CourseDescription";
import ErrorBoundary from "../ui/ErrorBoundary";
import HomePage from "../page/HomePage";

const routes = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "courses/:id/",
        element: <CourseDetail />,
        errorElement: <ErrorBoundary />,
        children: [
          {
            path: "description",
            element: <CourseDescription />,
          },
          {
            path: "content",
            element: <Accordion />,
            index: true,
          },
          {
            element: <Navigate to="content" replace />,
            index: true,
          },
          {
            path: "lecture",
            element: <Lecture />,
          },
        ],
      },
    ],
  },
]);

function RouteConfig() {
  return <RouterProvider router={routes} />;
}

export default RouteConfig;
