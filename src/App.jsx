import { useState, Suspense, lazy, useContext, useEffect } from "react";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";

import { ProviderContext } from "./providers";
import Loading from "./components/Loading";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const Home = lazy(() => import("./containers/Home"));
const Students = lazy(() => import("./containers/Students"));
const Progress = lazy(() => import("./containers/Progress"));
const Import = lazy(() => import("./containers/Import"));
const Export = lazy(() => import("./containers/Export"));
const Register = lazy(() => import("./containers/Register"));
const Login = lazy(() => import("./containers/Login"));
const NotFound = lazy(() => import("./containers/NotFound"));

function RequireAuth({ children }) {
  const { user } = useContext(ProviderContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

const containers = [
  { component: <Login />, path: "/", inMenu: false, title: "", private: false },
  {
    component: <Register />,
    path: "/register",
    inMenu: false,
    title: "",
    private: false,
  },
  {
    component: <Home />,
    path: "/home",
    inMenu: true,
    title: "Home",
    private: true,
  },
  {
    component: <Progress />,
    path: "/progress",
    inMenu: true,
    title: "Resultados",
    private: true,
  },
  {
    component: <Students />,
    path: "/students",
    inMenu: true,
    title: "Estudiantes",
    private: true,
  },
  {
    component: <Import />,
    path: "/import",
    inMenu: true,
    title: "importar",
    private: true,
  },
  {
    component: <Export />,
    path: "/export",
    inMenu: true,
    title: "exportar",
    private: true,
  },
  {
    component: <NotFound />,
    path: "*",
    inMenu: false,
    title: "",
    private: false,
  },
];

function App() {
  return (
    <Routes>
      {containers.map((element, index) => {
        return element.private ? (
          <Route
            key={index}
            path={element.path}
            element={
              <RequireAuth key={index}>
                <Suspense fallback={<Loading />}>{element.component}</Suspense>{" "}
              </RequireAuth>
            }
          />
        ) : (
          <Route
            path={element.path}
            key={index}
            element={
              <Suspense fallback={<Loading />}>{element.component}</Suspense>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
export { containers };
