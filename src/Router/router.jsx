import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Writers from "../pages/Writers/Writers";
import Writer from "../pages/Writer/Writer";

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
    ],
  },
]);
