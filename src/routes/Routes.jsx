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
import AdminRoute from "./AdminRoute";
import AdminPages from "../Pages/AdminPages/AdminPages";
import AdminLayout from "../Layout/AdminLayout";
import BookList from "../Pages/AdminPages/Lists/BookList/BookList";
import AddBook from "../Pages/AdminPages/Add/AddBook/AddBook";
import WriterList from "../Pages/AdminPages/Lists/WriterList/WriterList";
import AddWriter from "../Pages/AdminPages/Add/AddWriter/AddWriter";
import EditBook from "../Pages/AdminPages/Edit/EditBook/EditBook";
import EditWriter from "../Pages/AdminPages/Edit/EditWriter/EditWriter";
import EditorList from "../Pages/AdminPages/Lists/EditorList/EditorList";
import AddEditor from "../Pages/AdminPages/Add/AddEditor/AddEditor";
import EditEditor from "../Pages/AdminPages/Edit/EditEditor/EditEditor";
import TranslatorList from "../Pages/AdminPages/Lists/TranslatorList/TranslatorList";
import AddTranslator from "../Pages/AdminPages/Add/AddTranslator/AddTranslator";
import EditTranslator from "../Pages/AdminPages/Edit/EditTranslator/EditTranslator";
import PublisherList from "../Pages/AdminPages/Lists/PublisherList/PublisherList";
import EditPublisher from "../Pages/AdminPages/Edit/EditPublisher/EditPublisher";
import AddPublisher from "../Pages/AdminPages/Add/AddPublisher/AddPublisher";
import ImporterList from "../Pages/AdminPages/Lists/ImporterList/ImporterList";
import EditImporter from "../Pages/AdminPages/Edit/EditImporter/EditImporter";
import AddImporter from "../Pages/AdminPages/Add/AddImporter/AddImporter";
import CategoryList from "../Pages/AdminPages/Lists/CategoryList/CategoryList";
import AddCategory from "../Pages/AdminPages/Add/AddCategory/AddCategory";
import EditCategory from "../Pages/AdminPages/Edit/EditCategory/EditCategory";
import SubCategoryList from "../Pages/AdminPages/Lists/SubCategoryList/SubCategoryList";
import AddSubCategory from "../Pages/AdminPages/Add/AddSubCategory/AddSubCategory";
import EditSubCategory from "../Pages/AdminPages/Edit/EditSubCategory/EditSubCategory";
import OrderList from "../Pages/AdminPages/Lists/OrderList/OrderList";
import TestAddBook from "../Pages/AdminPages/TestAddBook";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddBanner from "../Pages/AdminPages/Add/AddBanner/AddBanner";
import BannerList from "../Pages/AdminPages/Lists/BannerList/BannerList";
import EditBanner from "../Pages/AdminPages/Edit/EditBanner/EditBanner";

const link = "https://maktabatul-amzad-s-tan.vercel.app/api";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
    errorElement: <ErrorPage />,
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
    errorElement: <ErrorPage />,
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
  {
    path: "admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    errorElement: <ErrorPage />,

    children: [
      {
        path: "",
        element: <AdminPages />,
      },
      {
        path: "addbanner",
        element: <AddBanner />,
      },
      {
        path: "bannerlist",
        element: <BannerList />,
      },
      {
        path: "editbanner/:id",
        element: <EditBanner />,
        loader: ({ params }) => fetch(`${link}/banners/${params.id}`),
      },
      {
        path: "booklist",
        element: <BookList />,
      },
      {
        path: "editbook/:id",
        element: <EditBook />,
        loader: ({ params }) => fetch(`${link}/books/${params.id}`),
      },
      {
        path: "addbook",
        element: <AddBook />,
      },
      {
        path: "writerlist",
        element: <WriterList />,
      },
      {
        path: "addwriter",
        element: <AddWriter />,
      },
      {
        path: "editwriter/:wrtiterid",
        element: <EditWriter />,
        loader: ({ params }) => fetch(`${link}/writers/${params.wrtiterid}`),
      },
      {
        path: "editorlist",
        element: <EditorList />,
      },
      {
        path: "addeditor",
        element: <AddEditor />,
      },
      {
        path: "editeditor/:editorid",
        element: <EditEditor />,
        loader: ({ params }) => fetch(`${link}/editors/${params.editorid}`),
      },
      {
        path: "translatorlist",
        element: <TranslatorList />,
      },
      {
        path: "addtranslator",
        element: <AddTranslator />,
      },
      {
        path: "edittranslator/:translatorid",
        element: <EditTranslator />,
        loader: ({ params }) =>
          fetch(`${link}/translators/${params.translatorid}`),
      },
      {
        path: "publisherlist",
        element: <PublisherList />,
      },
      {
        path: "addpublisher",
        element: <AddPublisher />,
      },
      {
        path: "editpublisher/:publisherid",
        element: <EditPublisher />,
        loader: ({ params }) =>
          fetch(`${link}/publishers/${params.publisherid}`),
      },
      {
        path: "importerlist",
        element: <ImporterList />,
      },
      {
        path: "addimporter",
        element: <AddImporter />,
      },
      {
        path: "editimporter/:id",
        element: <EditImporter />,
        loader: ({ params }) => fetch(`${link}/importedcountry/${params.id}`),
      },
      {
        path: "categorylist",
        element: <CategoryList />,
      },
      {
        path: "addcategory",
        element: <AddCategory />,
      },
      {
        path: "editcategory/:categoryid",
        element: <EditCategory />,
        loader: ({ params }) =>
          fetch(`${link}/categories/${params.categoryid}`),
      },
      {
        path: "subcategorylist",
        element: <SubCategoryList />,
      },
      {
        path: "addsubcategory",
        element: <AddSubCategory />,
      },
      {
        path: "editsubcategory/:subcategoryid",
        element: <EditSubCategory />,
        loader: ({ params }) =>
          fetch(`${link}/subcategories/${params.subcategoryid}`),
      },
      {
        path: "orderlist",
        element: <OrderList />,
      },
      {
        path: "testaddbook",
        element: <TestAddBook />,
      },
    ],
  },
]);
