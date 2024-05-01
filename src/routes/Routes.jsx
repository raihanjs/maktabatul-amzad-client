import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import AllBooks from "../Pages/AllBooksPage/AllBooks/AllBooks";
import AuthLayout from "../Layout/AuthLayout";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Auth from "../Pages/Auth/Auth/Auth";
import ResetPassword from "../Pages/Auth/ResetPassword/ResetPassword";
import AllWriters from "../Pages/AllWritersPage/AllWriters/AllWriters";
import AllCategories from "../Pages/AllCategoriesPage/AllCategories/AllCategories";
import PrivateRoute from "./PrivateRoute";

import UserLayout from "../Layout/UserLayout";
import UserPage from "../Pages/UserPage/UserPage";
import UserOrders from "../Pages/UserPage/UserOrders/userOrders";
import CartDetails from "../Pages/Orders/CartDetails/CartDetails";
import ConfirmOrder from "../Pages/Orders/ConfirmOrder/ConfirmOrder";
import BookPage from "../Pages/BookPage/BookPage";
import WriterPage from "../Pages/WriterPage/WriterPage";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";

const link = "https://maktabatul-amzad-s-tan.vercel.app/api";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "books",
        element: <AllBooks />,
      },
      {
        path: "books/:id",
        element: <BookPage />,
        loader: ({ params }) => fetch(`${link}/books/${params.id}`),
      },
      {
        path: "writers",
        element: <AllWriters />,
      },
      {
        path: "writers/:id",
        element: <WriterPage />,
        loader: ({ params }) => fetch(`${link}/writers/${params.id}`),
      },
      {
        path: "categories",
        element: <AllCategories />,
      },
      {
        path: "categories/:id",
        element: <CategoryPage />,
        loader: ({ params }) => fetch(`${link}/categories/${params.id}`),
      },
      {
        path: "cartdetails",
        element: <CartDetails />,
      },
      {
        path: "confirmorder",
        element: <ConfirmOrder />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Auth />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "user",
    element: (
      <PrivateRoute>
        <UserLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <UserPage />,
      },
      {
        path: "orders",
        element: <UserOrders />,
      },
    ],
  },
]);
