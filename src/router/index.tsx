import { lazy } from "react";

// 不需要懒加载的页面组件
import Home from "../views/home/Home";
import Layout from "../views/layout/layout";
// import About from "@/views/About";
import NotFind from "../views/404";

// 需要懒加载的页面组件
const About = lazy(() => import("@/views/About"));
const Login = lazy(() => import("@/views/login/Login"));

import { RouteObject } from "react-router-dom";

// const modules = import.meta.glob("@/views/**/*.tsx");

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    // 向Vue一样创建children放置页面
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <NotFind />,
  },
];

export default routers;
