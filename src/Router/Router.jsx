import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../RootLayout/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import PrivateRoutes from "../context/AuthContrect/PrivateRoutes";
// import About from "../Pages/about/About";
import AddTags from "../Pages/shared/AddTags/AddTags";
import AnnouncementForm from "../Pages/Home/Announcement/AnnouncementForm";
import CreatePostForm from "../Pages/Home/CreatePostForm/CreatePostForm";
import PostDetails from "../Pages/Home/PostDetails/PostDetails";
// import Dashboard from "../RootLayout/Dashboard";
import DashboardLayout from "../RootLayout/DashboardLayout";
// import MyProfile from "../Pages/BordDashboard/MyProfile/MyProfile";
import Error from "../Pages/Erroe/Error";
import Payment from "../Pages/Payment/Payment";
// import AddPost from "../Pages/BordDashboard/AddPost";
// import AddPost from "../Pages/BordDashboard/AddPost/AddPost";
// import MyProfile from "../Pages/BordDashboard/MyProfile/MyProfile";
// import CommentInput from "../Pages/Home/PostCard/PostComment/CommentInput";

export const router = createBrowserRouter([
  {
    path: "/*",
    Component: Error,
  },
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://socil-algo-forum-server.vercel.app/tags"),
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
        path: "/Details/:id",
        loader: ({ params }) =>
          fetch(`socil-algo-forum-server.vercel.app/posts/${params.id}`),
        Component: PostDetails,
      },

      {
        path: "createPostForm",
        element: (
          <PrivateRoutes>
            <CreatePostForm></CreatePostForm>
          </PrivateRoutes>
        ),
      },
      {
        path: "membership",
        element: (
          <PrivateRoutes>
            <Payment></Payment>
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

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      // {
      // path: "addPost",
      // Component: AddPost,
      // },
    ],
  },
]);
