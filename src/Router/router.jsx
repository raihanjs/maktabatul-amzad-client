import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Writers from "../pages/Writers/Writers";
import Writer from "../pages/Writer/Writer";
import Publishers from "../pages/Publishers/Publishers";
import Publisher from "../pages/Publisher/Publisher";
import Categories from "../pages/Categories/Categories";
import Category from "../pages/Category/Category";
import SubCategory from "../pages/SubCategory/SubCategory";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "writers",
        element: <Writers />,
      },
      {
        path: "writer/:id",
        element: <Writer />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/writers/${params.id}`),
      },
      {
        path: "publishers",
        element: <Publishers />,
      },
      {
        path: "publisher/:id",
        element: <Publisher />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/publishers/${params.id}`),
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "subcategory/:id",
        element: <SubCategory />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/subcategories/${params.id}`),
      },
    ],
  },
]);
