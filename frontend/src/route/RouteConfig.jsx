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
import LearningPage from "../page/LearningPage";
import VideoPlayer from "../features/learning/videoPlayer/VideoPlayer";
import UserCourses from "../features/userCourses/UserCourses";
import WishList from "../features/wishlist/WishList";
import UserCoursesPage from "../page/UserCoursesPage";
import CartPage from "../page/CartPage";
import LecturerPage from "../page/LecturerPage";
import LecturerCourseSystem from "../components/LecturerCourseSystem/LecturerCourseSystem";
import CourseEditor from "../components/LecturerCourseSystem/CourseSystem/CourseEditor";
import CatergoriesPage from "../page/CatergoriesPage";

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
        path: "/fields/:field-name",
        errorElement: <ErrorBoundary />,
        element: <CatergoriesPage />
      },
      {
        path: "courses/:id",
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
      {
        path: "my-course",
        element: <UserCoursesPage />,
        errorElement: <ErrorBoundary />,
        children: [
          {
            path: "",
            index: true,
            element: <UserCourses />
          },
          {
            path: "wishlist",
            element: <WishList />
          },
        ],
      },
      {
        path: "cart",
        element: <CartPage />
      },
      {
        path: "lecturer",
        element: <LecturerPage />,
        children: [
          {
            path: "",
            index: true,
            element: <LecturerCourseSystem />
          },
          {
            path: ":course",
            element: <CourseEditor />
          }
        ]
      }
    ],
  },
  {
    element: <LearningPage />,
    path: "learning/:id",
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: ":lecture",
        element: <VideoPlayer />,
      },
      {
        path: "",
        index: true,
        element: <VideoPlayer />,
      },
    ],
  },
]);

function RouteConfig() {
  return <RouterProvider router={routes} />;
}

export default RouteConfig;
