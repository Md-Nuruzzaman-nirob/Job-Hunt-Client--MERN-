import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/home/HomePage";
import FindJob from "../pages/findJob/FindJob";
import BrowseCompanies from "../pages/browseCompanies/BrowseCompanies";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "findJobs",
        element: <FindJob />,
      },
      {
        path: "browseCompanies",
        element: <BrowseCompanies />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);
export default myRoutes;
