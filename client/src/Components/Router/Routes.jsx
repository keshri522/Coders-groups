import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowMoretraning from "../Pages/ShowMoreTraning/ShowMoretraning";
import AdminDashboard from "../Pages/AdminDahsboard/AdminDahsboard";
import ShowmoreConsultancy from "../Pages/ShowMoreConsultancy/ShowmoreConsultancy";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDashboard></AdminDashboard>}></Route>
        <Route
          path="/trainingpage"
          element={<ShowMoretraning></ShowMoretraning>}
        ></Route>
        <Route
          path="/consultingpage"
          element={<ShowmoreConsultancy></ShowmoreConsultancy>}
        ></Route>
      </Routes>
    </>
  );
};

export default Router;
