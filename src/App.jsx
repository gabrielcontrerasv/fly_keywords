import { useState, Suspense, lazy, useContext, useEffect } from "react";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";

import { ProviderContext } from "./providers";
import Loading from "./components/Loading";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const Home = lazy(() => import("./containers/Home"));
const Login = lazy(() => import("./containers/Login"));
const NotFound = lazy(() => import("./containers/NotFound"));

function RequireAuth({ children }) {
  const { user } = useContext(ProviderContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  const containers = [
    { component: <Login />, path: "/", private: false },
    { component: <Home />, path: "/home", private: true },
    { component: <NotFound />, path: "*", private: false },
  ];

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
