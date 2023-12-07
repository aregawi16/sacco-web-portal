import React, { useState, useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import DashboardPage from "./pages/Dashboard";

const AppRoutes = () => {
  const [routeState, setRouteState] = useState("/");

  useEffect(() => {
    const onRouteChanged = () => {
      setRouteState(window.location.pathname);
    };

    window.addEventListener("routechange", onRouteChanged);
    return () => window.removeEventListener("routechange", onRouteChanged);
  }, []);

  return (
    <Routes>
      <Route exact path="/" component={DashboardPage} />
      {/* ... add other routes here */}
      {/* <Redirect to="/" /> */}
    </Routes>
  );
};

export default AppRoutes;
