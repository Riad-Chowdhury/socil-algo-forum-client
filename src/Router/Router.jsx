import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../RootLayout/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import PrivateRoutes from "../context/AuthContrect/PrivateRoutes";
import About from "../Pages/about/About";
import AddTags from "../Pages/shared/AddTags/AddTags";
import AnnouncementForm from "../Pages/Home/Announcement/AnnouncementForm";
import CreatePostForm from "../Pages/Home/CreatePostForm/CreatePostForm";

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <h3 className="text-2xl">Error</h3>,
  },
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/tags"),
        Component: Home,
      },
      {
        path: "addTags",
        element: (
          <PrivateRoutes>
            <AddTags></AddTags>
          </PrivateRoutes>
        ),
      },
      {
        path: "announcementForm",
        element: (
          <PrivateRoutes>
            <AnnouncementForm></AnnouncementForm>,
          </PrivateRoutes>
        ),
      },
      {
        path: "createPostForm",
        element: (
          <PrivateRoutes>
            <CreatePostForm></CreatePostForm>
          </PrivateRoutes>
        ),
      },
    ],
  },
  //Authentication ⬇
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
