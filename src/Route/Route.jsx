import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Admission from "../Pages/Admission/Admission";
import Colleges from "../Pages/Colleges/Colleges";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import MyCollege from "../Pages/MyCollege/MyCollege";
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
    ],
  },
]);

export default router;
