import Home from "../views/Home";
import Layout from "../views/layout/layout";
import About from "@/views/About";
import NotFind from "../views/404";

import { RouteObject } from "react-router-dom";

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    // 向Vue一样创建children放置页面
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFind />,
  },
];

export default routers;
