import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Allbooks from "../../pages/AllBooks/Allbooks";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home/Home";
import SingleBook from "../../pages/SingleBook/SingleBook";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/allbooks",
        element: <Allbooks></Allbooks>,
      },
      {
        path: "/book/:id",
        element: <SingleBook></SingleBook>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
]);
