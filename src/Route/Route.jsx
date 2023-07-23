import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Admission from "../Pages/Admission/Admission";
import Apply from "../Pages/Apply/Apply";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Colleges from "../Pages/Colleges/Colleges";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Register from "../Pages/Register/Register";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivetRoute from "./PrivetRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "college",
        element: <Colleges></Colleges>,
      },
      {
        path: "admission",
        element: <Admission></Admission>,
      },
      {
        path: "myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "apply/:id/:name",
        element: (
          <PrivetRoute>
            <Apply></Apply>
          </PrivetRoute>
        ),
      },
      {
        path: ":id",
        element: (
          <PrivetRoute>
            <CollegeDetails></CollegeDetails>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
